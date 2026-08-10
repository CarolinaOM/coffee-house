const About = () => {
  return (
    <section id="about" className="absolute inset-0 w-full h-full bg-[#382213] text-white flex flex-col justify-center items-center px-6 md:px-16 pt-20 pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-5 my-auto">
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" 
              alt="Café de especialidad" 
              className="w-full h-[140px] md:h-[180px] object-cover rounded-2xl shadow-2xl border border-amber-900/50"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight mb-2 text-white">
              Nuestra historia de pasión y tueste
            </h2>
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light">
              Abrimos este espacio con una idea bien clara: hacer las cosas con calma y mimo. Cada grano que molemos tiene detrás una historia de gente que cuida la tierra, y nosotros nos encargamos de que llegue a tu taza perfecto.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold font-serif mb-3 text-white text-center">
            Lo que nos hace especiales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#4a2e18] border border-amber-900/40 shadow-inner">
              <h4 className="text-sm font-semibold text-white mb-1">De origen único</h4>
              <p className="text-[11px] text-stone-300 font-light">Pequeños productores que cuidan cada cosecha.</p>
            </div>

            <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#4a2e18] border border-amber-900/40 shadow-inner">
              <h4 className="text-sm font-semibold text-white mb-1">Tostado propio</h4>
              <p className="text-[11px] text-stone-300 font-light">Tostamos poco a poco para conservar todo su aroma.</p>
            </div>

            <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#4a2e18] border border-amber-900/40 shadow-inner">
              <h4 className="text-sm font-semibold text-white mb-1">Hecho con arte</h4>
              <p className="text-[11px] text-stone-300 font-light">Mimamos cada extracción para una taza perfecta.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;