import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from '@/pages/Homepage'
import LandingPage from "@/pages/LandingPage";
import About from '@/pages/About'
import Service from '@/pages/Services'
import BackToTopButton from './components/top';
import Contact from "@/pages/Contact";
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen main-container">
        <Navbar />
        <BackToTopButton />
        <div className="content flex-1">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Portfolio" element={<Homepage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
