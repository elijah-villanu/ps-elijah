import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage";
import type { Page } from "./types";
import { preloadImages } from "./assets/imagePreload";


const about: string = `Welcome! I'm Elijah Villanueva, and I'm a new Computer Science graduate from California Polytechnic State University, San Luis Obispo! I'm passionate about game developement (occasional gamejam), software engineering (yes, I own Designing Data-Intensive Applications by  Martin Kleppman), and computer graphics; but honestly, anything tech gets me excited!
  
  Previously, I worked at Cal Poly as a UI/UX Research Assistant under Dr. Silas Hsu. Currently, I work on two of Dr. Hsu's projects: 'How Does User Control Reduce Irritation of Mid-Roll Ads' and 'Effectiveness of Video Games for Teaching Rhythm'.
 
  On my free time you'll probably catch me playing video games, making LoFi Beats, or playing the drum set!
  `

// Animation timings in ms
const timing = {
  backdropFade: 600,
  cardIn: 480,
  cardOut: 216,
  cardStagger: 72,
  navIn: 600,
}
const iosEase = "cubic-bezier(0.32, 0.72, 0, 1)"

const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches

// Cards currently on screen, in page order (skips the hidden desktop/mobile copies)
function onScreenCards(page: HTMLElement) {
  return [...page.querySelectorAll<HTMLElement>("section, article")].filter((card) => {
    const rect = card.getBoundingClientRect()
    return rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight
  })
}

function App() {
  // Track page state to render chosen page
  const [activePage, setActivePage] = useState<Page>("about");
  const backdropRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const hasNavigated = useRef(false)
  const isLeaving = useRef(false)

  // Cards rise in one by one. On first load the backdrop fades in first and the nav drops in last
  useLayoutEffect(() => {
    if (reduceMotion()) return
    const isIntro = !hasNavigated.current
    const start = isIntro ? timing.backdropFade : 0
    const cards = onScreenCards(pageRef.current!)

    const animations = cards.map((card, i) => card.animate(
      [{ opacity: 0, transform: "translateY(16px) scale(0.96)" }, { opacity: 1, transform: "none" }],
      { duration: timing.cardIn, delay: start + i * timing.cardStagger, easing: iosEase, fill: "backwards" },
    ))

    if (isIntro) {
      const backdrop = backdropRef.current!
      animations.push(backdrop.animate(
        { opacity: ["0", getComputedStyle(backdrop).opacity] },
        { duration: timing.backdropFade, easing: "ease-out" },
      ))
      animations.push(navRef.current!.animate(
        [{ opacity: 0, transform: "translateY(-100%)" }, { opacity: 1, transform: "none" }],
        { duration: timing.navIn, delay: start + cards.length * timing.cardStagger + timing.cardIn / 2, easing: iosEase, fill: "backwards" },
      ))
    }
    return () => animations.forEach((animation) => animation.cancel())
  }, [activePage])

  // Cards leave one by one, then the new page renders and runs the effect above
  function changePage(page: Page) {
    if (page === activePage || isLeaving.current) return
    hasNavigated.current = true
    isLeaving.current = true

    const cards = reduceMotion() ? [] : onScreenCards(pageRef.current!)
    const exits = cards.map((card, i) => card.animate(
      { opacity: 0, transform: "translateY(-8px) scale(0.98)" },
      { duration: timing.cardOut, delay: i * timing.cardStagger, easing: "ease-in", fill: "forwards" },
    ).finished)

    Promise.allSettled(exits).then(() => {
      isLeaving.current = false
      setActivePage(page)
    })
  }

  // Preload/cache all images
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Point each card's light-border at the mouse; touch-only devices keep the CSS default
  useEffect(() => {
    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        for (const card of document.querySelectorAll<HTMLElement>(".light-border")) {
          const rect = card.getBoundingClientRect()
          const dx = e.clientX - (rect.left + rect.width / 2)
          const dy = e.clientY - (rect.top + rect.height / 2)
          const length = Math.hypot(dx, dy) || 1
          card.style.setProperty("--light-x", `${dx / length}`)
          card.style.setProperty("--light-y", `${dy / length}`)
        }
      })
    }
    window.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Returns page to render based on state
  function renderPage() {
    switch (activePage) {
      case "about":
        return <AboutPage aboutText={about} />
      case "projects":
        return <ProjectsPage />
      default:
        return <AboutPage aboutText={about} />
    }
  }

  return (
    <div className="font-mono">
      <Backdrop ref={backdropRef} />
      <Navbar
        ref={navRef}
        activePage={activePage}
        setActivePage={changePage}
      />
      <div className="flex justify-center">
        <div ref={pageRef} className="min-w-0 max-w-5xl mt-4 ml-4 mr-4 mb-4">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App
