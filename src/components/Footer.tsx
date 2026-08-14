import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1917] border-t border-neutral-800 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link to="/" className="text-white font-bold font-serif text-lg no-underline hover:text-amber-500 transition-colors">
              CoffeeHouse
            </Link>
            <p className="text-stone-500 text-xs mt-1">
              Un espacio creado con pasión para los amantes del buen café y los momentos tranquilos.
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-stone-300">
            <Link to="/nosotros" className="hover:text-amber-500 transition-colors no-underline">
              Nosotros
            </Link>
            <Link to="/menu" className="hover:text-amber-500 transition-colors no-underline">Menú</Link>
            <Link to="/resenas" className="hover:text-amber-500 transition-colors no-underline">Reseñas</Link> {/* 👈 Cambiado a Link de ruta */}
            <Link to="/contacto" className="hover:text-amber-500 transition-colors no-underline">
              Contacto
            </Link>
          </nav>
        </div>

        <div className="text-center text-[10px] text-stone-600 border-t border-neutral-800 pt-4">
          © 2026 CoffeeHouse. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;