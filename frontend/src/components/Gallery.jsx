import { useState, useEffect } from 'react';
import { galleryAPI } from '../api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    galleryAPI.getImages()
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');

  if (loading) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center text-darkbrown">Loading gallery...</div>
      </section>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkgreen mb-4">Moments That Last Forever</h2>
        <p className="text-center text-darkbrown/70 text-sm mb-12 italic">
          "The only thing better than experiencing it, is reliving it."
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div 
              key={img.id}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer group relative"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src ? `${baseUrl}${img.src}` : ''}
                alt={img.alt}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300 bg-darkbrown/80 px-4 py-2 rounded-full">
                  🔍 View
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-darkbrown/40 text-sm mt-8">
          📸 Every image captured on our Exclusive 360 safaris
        </p>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage.src ? `${baseUrl}${selectedImage.src}` : ''}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <p className="text-white text-center mt-4 text-sm">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;