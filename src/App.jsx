import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navar from "./pages/Navar";



function App() {
  return (
    <BrowserRouter>
    <Navar />
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App