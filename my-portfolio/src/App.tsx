import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <div className="font-jetbrain">
      <Backdrop
        activeSection="projects"
      />
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-3xl mt-12">
          <AboutPage/>
        </div>
      </div>
    </div>
  )
}

export default App
