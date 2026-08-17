import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact'; 
import Menu from './sections/Menu'; 
import Footer from './components/Footer';
import Reviews from './components/Reviews';

function App() {



  return (
    <div className="w-full h-screen bg-[#1c1917] text-white flex flex-col overflow-hidden relative">
      <Header />
      
      <main className="w-full flex-grow flex flex-col overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/contacto" element={<Contact />} />
          <Route path="/resenas" element={<Reviews />} />
        </Routes>
      </main>

      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;