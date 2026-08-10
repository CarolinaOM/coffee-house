const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1917] text-stone-300 py-6 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold font-serif text-white mb-1">CoffeeHouse</h2>
          <p className="text-xs text-stone-400 max-w-sm">
            Un espacio creado con pasión para los amantes del buen café y los momentos tranquilos.
          </p>
        </div>

        <div className="flex gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-amber-400 transition-colors no-underline text-stone-300">Nosotros</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors no-underline text-stone-300">Menú</a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors no-underline text-stone-300">Reseñas</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors no-underline text-stone-300">Contacto</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-4 pt-4 border-t border-neutral-800/60 text-center text-[11px] text-stone-500">
        © {new Date().getFullYear()} CoffeeHouse. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;