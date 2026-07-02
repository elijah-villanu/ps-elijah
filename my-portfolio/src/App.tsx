import { useState } from "react";
import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage";
import type { Page } from "./types";

const about: string = `Welcome! I'm Elijah Villanueva, and I'm a senior from California Polytechnic State University, San Luis Obispo! I'm expected to get my Bachelor's Degree in Computer Science this August 2026. I'm passionate about game developement, system design (yes, I own Designing Data-Intensive Applications by  Martin Kleppman), and computer graphics; but honestly, anything tech gets me excited!
  
  Currently, I work at Cal Poly as a UI/UX Research Assistant under Dr. Silas Hsu. Currently, I work on two of Dr. Hsu's projects: 'How Does User Control Reduce Irritation of Mid-Roll Ads' and 'How Does Gamified Rhythm Practice Affect Performance'. On another note, I'm also working on getting my AZ-900 certificate for Azure.

  On my free time, I play video games, make LoFi Beats, and play the drum set!
  `
function App() {
  // Track page state to render chosen page
  const [activePage, setActivePage] = useState<Page>("about");

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
    <div className="font-jetbrain">
      <Backdrop
        activeSection="projects"
      />
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <div className="flex justify-center">
        <div className="max-w-3xl mt-8 ml-4 mr-4 mb-8">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App
