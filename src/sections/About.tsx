const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#1c1917] text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 pt-24 pb-32 overflow-y-auto">
      
      {/* Fondo con imagen de cafetería unificado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop" 
          alt="Coffee shop background" 
          className="w-full h-full object-cover opacity-50 filter brightness-90 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/50 via-[#1c1917]/60 to-[#1c1917]/80 fixed"></div>
      </div>

      {/* Contenido principal con espacio extra abajo para móviles (mb-12) */}
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-3 sm:gap-5 my-auto relative z-10 pt-8 pb-16">
        
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" 
              alt="Café de especialidad" 
              className="w-full h-24 sm:h-[130px] md:h-[160px] object-cover rounded-2xl shadow-2xl border border-neutral-700/60"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start text-left bg-[#201d1a]/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-neutral-700/60 shadow-xl">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold font-serif tracking-tight mb-1 text-amber-500">
              Nuestra historia de pasión y tueste
            </h2>
            <p className="text-stone-300 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light">
              Abrimos este espacio con una idea bien clara: hacer las cosas con calma y mimo. Cada grano que molemos tiene detrás una historia de gente que cuida la tierra, y nosotros nos encargamos de que llegue a tu taza perfecto.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-sm sm:text-lg md:text-xl font-bold font-serif mb-2 text-white text-center">
            Lo que nos hace especiales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 w-full">
            <div className="flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl bg-[#201d1a]/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-amber-500 mb-0.5">De origen único</h4>
              <p className="text-[10px] sm:text-[11px] text-stone-300 font-light">Pequeños productores que cuidan cada cosecha.</p>
            </div>

            <div className="flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl bg-[#201d1a]/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-amber-500 mb-0.5">Tostado propio</h4>
              <p className="text-[10px] sm:text-[11px] text-stone-300 font-light">Tostamos poco a poco para conservar todo su aroma.</p>
            </div>

            <div className="flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl bg-[#201d1a]/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-amber-500 mb-0.5">Hecho con arte</h4>
              <p className="text-[10px] sm:text-[11px] text-stone-300 font-light">Mimamos cada extracción para una taza perfecta.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;