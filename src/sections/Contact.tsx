const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#1c1917] text-white flex flex-col items-center px-4 pt-24 pb-48 overflow-y-auto">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop" 
          alt="Coffee shop background" 
          className="w-full h-full object-cover opacity-50 filter brightness-90 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917]/50 via-[#1c1917]/60 to-[#1c1917]/80 fixed"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-8 relative z-10 my-auto pt-6">
        
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-500 drop-shadow-md">
            Reserva tu Mesa
          </h2>
          <form 
            action="https://formspree.io/f/xjywbcaq" 
            method="POST" 
            className="flex flex-col gap-3 bg-[#201d1a]/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-neutral-700/60 shadow-2xl"
          >
            <div className="relative flex items-center">
              <span className="absolute left-3 text-amber-500 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input type="text" name="nombre" placeholder="Nombre completo" required className="w-full bg-[#141210] border border-neutral-700 rounded-lg py-3 pl-10 pr-3 text-sm text-white placeholder-stone-400 outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-3 text-amber-500 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input type="email" name="email" placeholder="Tu correo electrónico" required className="w-full bg-[#141210] border border-neutral-700 rounded-lg py-3 pl-10 pr-3 text-sm text-white placeholder-stone-400 outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1 flex items-center">
                <span className="absolute left-3 text-amber-500 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="date" 
                  name="fecha" 
                  required 
                  onClick={(e) => {
                    try {
                      (e.target as HTMLInputElement).showPicker();
                    } catch {}
                  }}
                  className="w-full bg-[#141210] border border-neutral-700 rounded-lg py-3 pl-10 pr-3 text-sm text-stone-200 outline-none focus:border-amber-500 transition-colors cursor-pointer" 
                />
              </div>
              
              <div className="relative flex-1 flex items-center">
                <span className="absolute left-3 text-amber-500 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input 
                  type="time" 
                  name="hora" 
                  required 
                  onClick={(e) => {
                    try {
                      (e.target as HTMLInputElement).showPicker();
                    } catch {}
                  }}
                  className="w-full bg-[#141210] border border-neutral-700 rounded-lg py-3 pl-10 pr-3 text-sm text-stone-200 outline-none focus:border-amber-500 transition-colors cursor-pointer" 
                />
              </div>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-3 text-amber-500 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              <select 
                name="personas" 
                required 
                defaultValue=""
                className="w-full bg-[#141210] border border-neutral-700 rounded-lg py-3 pl-10 pr-3 text-sm text-stone-200 outline-none focus:border-amber-500 transition-colors cursor-pointer appearance-none"
              >
                <option value="" disabled className="text-stone-500">Número de personas</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 o más personas</option>
              </select>
            </div>

            <textarea name="mensaje" placeholder="¿Alguna petición especial para tu mesa?" rows={3} className="w-full bg-[#141210] border border-neutral-700 rounded-lg p-3 text-sm text-white placeholder-stone-400 outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
            
            <button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 rounded-lg transition-all mt-1 shadow-md cursor-pointer">
              Enviar Solicitud
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="bg-[#201d1a]/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-neutral-700/60 flex flex-col gap-4 shadow-2xl">
            
            <div className="w-full h-48 rounded-xl overflow-hidden border border-neutral-700 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6675000000003!2d-3.70379!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRestaurante!5e0!3m2!1ses!2ses!4v1600000000000" 
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy">
              </iframe>
            </div>
            
            <div className="text-left text-sm text-stone-200 flex flex-col gap-3 pt-1">
              <h3 className="font-bold text-amber-500 text-base">Encuéntranos</h3>
              
              <div className="flex items-center gap-3">
                <span className="text-amber-500 p-2 bg-[#141210] rounded-lg border border-neutral-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Calle Gran Vía 5, Madrid</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-500 p-2 bg-[#141210] rounded-lg border border-neutral-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Lunes a Domingo: 8:00am - 4:00pm</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-500 p-2 bg-[#141210] rounded-lg border border-neutral-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>+34 600 000 000</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-500 p-2 bg-[#141210] rounded-lg border border-neutral-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>hola@coffeehouse.es</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;