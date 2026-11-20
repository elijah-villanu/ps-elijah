import { useState, useEffect } from "react";
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
function App() {
  // Track page state to render chosen page
  const [activePage, setActivePage] = useState<Page>("about");

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
      <Backdrop />
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className="flex justify-center">
        <div className="min-w-0 max-w-5xl mt-4 ml-4 mr-4 mb-4">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App
