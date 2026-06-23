const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600', alt: 'Elephant herd at sunset' },
    { id: 2, src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600', alt: 'Masai Mara river crossing' },
    { id: 3, src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600', alt: 'Lion cubs on savanna' },
    { id: 4, src: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600', alt: 'Giraffe silhouette' },
    { id: 5, src: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=600', alt: 'Safari vehicle with wildlife' },
    { id: 6, src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600', alt: 'African sunset baobab tree' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkgreen mb-4">Moments That Last Forever</h2>
        
        {/* Scrolling text - confined to container */}
        <div className="overflow-hidden mb-2 max-w-3xl mx-auto">
          <div className="animate-slide whitespace-nowrap text-center">
            <span className="text-darkbrown text-lg mx-4">
              Every safari tells a story — here are just a few frames from our journeys across Africa.
            </span>
            <span className="text-darkbrown text-lg mx-4">
              Every safari tells a story — here are just a few frames from our journeys across Africa.
            </span>
          </div>
        </div>

        {/* Static italic text */}
        <p className="text-center text-darkbrown/60 text-sm mb-12 italic">
          "The only thing better than experiencing it, is reliving it."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div 
              key={img.id}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-500 ease-in-out"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-64 object-cover hover:brightness-110 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-darkbrown/40 text-sm mt-8">
          📸 Every image captured on our Exclusive 360 safaris
        </p>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          animation: slide 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;