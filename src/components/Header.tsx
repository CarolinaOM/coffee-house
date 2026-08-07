import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 w-[92%] max-w-5xl mx-auto z-50 bg-[#2C221E]/95 backdrop-blur-md border border-[#3E322C] rounded-full px-6 py-3.5 shadow-2xl"
    >
      <div className="flex justify-between items-center">
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white m-0">
          CoffeeHouse
        </span>
        
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-sm font-medium text-stone-200 hover:text-white transition-colors no-underline">Nosotros</a>
          <a href="#menu" className="text-sm font-medium text-stone-200 hover:text-white transition-colors no-underline">Menú</a>
          <a href="#reviews" className="text-sm font-medium text-stone-200 hover:text-white transition-colors no-underline">Reseñas</a>
          <a href="#contact" className="text-sm font-medium text-stone-200 hover:text-white transition-colors no-underline">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-lg no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Encuéntranos</span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-1.5"
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 mt-3 bg-[#2C221E] border border-[#3E322C] rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-left"
          >
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-white font-medium text-base no-underline py-1 border-b border-stone-800"
            >
              Nosotros
            </a>
            <a 
              href="#menu" 
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-white font-medium text-base no-underline py-1 border-b border-stone-800"
            >
              Menú
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-white font-medium text-base no-underline py-1 border-b border-stone-800"
            >
              Reseñas
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-stone-200 hover:text-white font-medium text-base no-underline py-1"
            >
              Contacto
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 rounded-xl text-sm mt-2 no-underline shadow-md"
            >
              <span>Encuéntranos</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;