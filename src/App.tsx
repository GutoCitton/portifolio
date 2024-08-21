import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn"
import Home from "./pages/Home/Home"

const App = () => {

  return (
  <>
    <BackToTopBtn showBelow={250}/>
    <Home />
  </>
  )
}

export default App
