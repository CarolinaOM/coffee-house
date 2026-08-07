import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl px-4 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse"></span>
          <span>Café de especialidad recién tostado</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight font-serif">
          Un buen café cambia por completo tu día.
        </h1>

        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
          Aquí preparamos cada taza con calma y cariño. Ven a disfrutar de un espacio acogedor, un aroma irresistible y el mejor café de la zona.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-7 py-3.5 rounded-xl transition-all shadow-md shadow-amber-900/10 no-underline"
          >
            Quiero ver el menú
          </a>
          <a
            href="#about"
            className="border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium px-7 py-3.5 rounded-xl transition-all no-underline"
          >
            Nuestra historia
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;