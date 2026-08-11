import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar los anclajes si estás en otra página
  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 px-4 pointer-events-none">
      <div className="w-full max-w-5xl bg-[#1c1917]/90 backdrop-blur-md border border-neutral-800 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl pointer-events-auto">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold font-serif text-white tracking-wide no-underline">
          CoffeeHouse
        </Link>

        {/* Menú de Escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <Link to="/" className="hover:text-amber-500 transition-colors no-underline">Inicio</Link>
          <Link to="/nosotros" className="hover:text-amber-500 transition-colors no-underline">Nosotros</Link>
          <button onClick={() => handleScrollTo('menu')} className="hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer text-stone-300 text-sm font-medium">Menú</button>
          <button onClick={() => handleScrollTo('reviews')} className="hover:text-amber-500 transition-colors bg-transparent border-none cursor-pointer text-stone-300 text-sm font-medium">Reseñas</button>
          <Link to="/contacto" className="hover:text-amber-500 transition-colors no-underline">Contacto</Link>
        </nav>

        {/* Botón de Escritorio */}
        <div className="hidden sm:flex items-center">
          <Link 
            to="/contacto" 
            className="inline-flex items-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md no-underline"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-4.97 8-9.03 8-12.5a8 8 0 10-16 0c0 3.47 3.03 7.53 8 12.5z" />
              <circle cx="12" cy="8.5" r="2.5" />
            </svg>
            <span>Encuéntranos</span>
          </Link>
        </div>

        {/* Botón Hamburguesa (Móvil) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-300 hover:text-amber-500 transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg className="w-6 h-6 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1c1917]/95 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 text-center md:hidden shadow-2xl pointer-events-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-amber-500 transition-colors text-base font-medium py-1.5 no-underline">
            Inicio
          </Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-amber-500 transition-colors text-base font-medium py-1.5 no-underline">
            Nosotros
          </Link>
          <button onClick={() => handleScrollTo('menu')} className="text-stone-200 hover:text-amber-500 transition-colors text-base font-medium py-1.5 bg-transparent border-none cursor-pointer">
            Menú
          </button>
          <button onClick={() => handleScrollTo('reviews')} className="text-stone-200 hover:text-amber-500 transition-colors text-base font-medium py-1.5 bg-transparent border-none cursor-pointer">
            Reseñas
          </button>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-stone-200 hover:text-amber-500 transition-colors text-base font-medium py-1.5 no-underline">
            Contacto
          </Link>
          
          <div className="pt-2 border-t border-neutral-800 flex justify-center">
            <Link 
              to="/contacto" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md w-full no-underline"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c4.97-4.97 8-9.03 8-12.5a8 8 0 10-16 0c0 3.47 3.03 7.53 8 12.5z" />
                <circle cx="12" cy="8.5" r="2.5" />
              </svg>
              <span>Encuéntranos</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;