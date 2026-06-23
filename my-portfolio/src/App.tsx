import Backdrop from "./components/Backdrop"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="font-jetbrain">
      <Backdrop
        activeSection="projects"
      />
      <Navbar />
      <div className="max-w-3xl">

      </div>
    </div>
  )
}

export default App
