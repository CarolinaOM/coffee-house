import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-6 flex flex-col items-center my-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/30 backdrop-blur-md mb-4 text-amber-300 text-xs md:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Café de especialidad recién tostado
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight mb-4 leading-[1.1] drop-shadow-md">
          Un buen café cambia por completo tu día.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-100 font-light max-w-xl mb-6 leading-relaxed drop-shadow">
          Aquí preparamos cada taza con calma y cariño. Ven a disfrutar de un espacio acogedor, un aroma irresistible y el mejor café de la zona.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
          <a 
            href="#menu"
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-7 py-3 rounded-full transition-all shadow-xl text-sm no-underline"
          >
            Quiero ver el menú
          </a>
          <Link 
            to="/nosotros"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold px-7 py-3 rounded-full transition-all text-sm no-underline"
          >
            Nuestra historia
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;