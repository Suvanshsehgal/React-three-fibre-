import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import {BrowserRouter} from "react-router-dom"
import bgimage from "./assets/herobg.png"


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className='relative z-0 bg-cover bg-no-repeat bg-center min-h-screen w-screen' style={{ backgroundImage: `url(${bgimage})`}}>
    <Navbar/>
     </div>
     <About/>
     <Experience/>
     <Feedbacks/>
     <Hero/>
     <Tech/>
     <Works/>
     <div className=" relative z-0">
      <Contact/>
      <StarsCanvas/>
     </div>

  
    </BrowserRouter>
     
    </>
  )
}

export default App
