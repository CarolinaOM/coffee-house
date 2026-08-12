import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen_url: string;
}

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data, error } = await supabase.from('menu').select('*');
        if (error) {
          console.error("Error al obtener el menú:", error.message);
        } else if (data) {
          setMenuItems(data);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const galeriaFotos = [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section id="menu" className="w-full min-h-screen bg-[#1c1917] text-white py-28 px-4 flex flex-col items-center overflow-y-auto">
      
      <div className="max-w-6xl w-full mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-amber-500 tracking-wide drop-shadow-md">
          Menú Principal
        </h2>
        <p className="text-stone-400 text-sm mt-2">Elige tu café favorito preparado al momento</p>
      </div>

      {loading ? (
        <p className="text-stone-400 py-12">Cargando menú desde la base de datos...</p>
      ) : (
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#201d1a]/90 border border-neutral-700/60 rounded-2xl p-4 flex flex-col justify-between shadow-xl hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                <div className="w-full h-44 rounded-xl overflow-hidden mb-4 border border-neutral-800">
                  <img 
                    src={item.imagen_url} 
                    alt={item.nombre} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-400">{item.nombre}</h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2 leading-relaxed">{item.descripcion}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between items-center text-sm font-semibold">
                <span className="text-stone-400 text-xs">Precio habitual</span>
                <span className="text-amber-500 text-base">{item.precio}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-6xl w-full mx-auto text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-amber-500 tracking-wide">
          Nuestra Galería
        </h3>
        <p className="text-stone-400 text-sm mt-1">Momentos únicos en Coffee House</p>
      </div>

      <div className="max-w-6xl w-full columns-1 sm:columns-2 md:columns-2 gap-6 space-y-6 mb-20">
        {galeriaFotos.map((foto, index) => (
          <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl relative group">
            <img 
              src={foto} 
              alt="Momento Coffee House" 
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;