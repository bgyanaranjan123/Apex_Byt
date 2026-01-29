import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      {/* Global styles applied directly to the root container */}
      <div style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden',
        position: 'relative'
      }}>
        <Header />
        <ScrollToTop />

        {/* Main content container - This pushes footer to bottom */}
        <div style={{
          flex: '1 0 auto', // This makes the content expand and push footer down
          width: '100%',
          marginTop: '20px', // Adjust this based on your header height
          paddingBottom: '0',
          marginBottom: '0'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer - This will stick to bottom */}
        <div style={{
          flexShrink: 0,
          width: '100%',
          marginTop: 'auto' // This pushes footer to bottom
        }}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}