import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, nombre: 'Sofía Martínez', comentario: '¡El mejor café de la zona sin duda! El ambiente es súper acogedor.', rating: 5 },
    { id: 2, nombre: 'Alejandro Gómez', comentario: 'Me pedí un Caramel Macchiato y superó mis expectativas.', rating: 5 },
    { id: 3, nombre: 'Carol', comentario: 'Muy bonito el local y la atención excelente.', rating: 4 }
  ]);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !comentario) return;

    const nuevaReseña = { id: Date.now(), nombre, comentario, rating };
    setReviews([nuevaReseña, ...reviews]);
    setNombre('');
    setComentario('');
    setRating(5);
  };

  return (
    <div className="w-full h-full overflow-y-auto pt-32 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-amber-500 mb-3">Opiniones de nuestros clientes</h2>
          <p className="text-stone-400 text-sm sm:text-base">Comparte tu experiencia o descubre lo que otros dicen de nuestro café.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-[#23201d] p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <h3 className="text-lg font-semibold text-stone-200 mb-4 flex items-center gap-2">
            <span>✨ Deja tu valoración</span>
          </h3>

          <div className="mb-4">
            <label className="block text-xs font-medium text-stone-400 mb-2">Puntuación</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-1.5 rounded-lg transition-transform hover:scale-110 focus:outline-none cursor-pointer ${
                    star <= rating ? 'text-amber-500' : 'text-neutral-600'
                  }`}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <input 
            className="w-full bg-[#1c1917] border border-neutral-700/80 p-3.5 rounded-xl mb-4 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="Tu nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          
          <textarea 
            rows={3}
            className="w-full bg-[#1c1917] border border-neutral-700/80 p-3.5 rounded-xl mb-5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
            placeholder="¿Qué te pareció el café y el lugar?" 
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)}
          />

          <button className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-amber-600/20 cursor-pointer">
            Publicar Reseña
          </button>
        </form>

        <div className="space-y-4 pb-12">
          <h3 className="text-lg font-serif text-stone-300 mb-2 border-b border-neutral-800 pb-2">Comentarios recientes</h3>
          {reviews.map((r) => (
            <div key={r.id} className="bg-[#23201d]/60 border border-neutral-800/80 p-5 rounded-2xl transition-all hover:border-neutral-700">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-amber-400 text-base">{r.nombre}</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-4 h-4 ${star <= r.rating ? 'text-amber-500 fill-current' : 'text-neutral-700 fill-current'}`} 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">{r.comentario}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;