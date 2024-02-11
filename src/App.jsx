import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from '@/pages/Homepage'
import About from '@/pages/About'
import Service from '@/pages/Services'
import Contact from "@/pages/Contact";
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen main-container">
        <Navbar />
        <div className="content flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
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
