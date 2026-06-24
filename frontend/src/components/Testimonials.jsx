import { useState, useEffect } from 'react';
import { testimonialsAPI } from '../api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testimonialsAPI.getTestimonials()
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-darkgreen">
        <div className="container mx-auto text-center text-white">Loading testimonials...</div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-darkgreen overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
        <p className="text-center text-yellow-400 mb-12">Real stories from real adventurers</p>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-64 overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => {
              let position = index - currentIndex;
              if (position < 0) position += testimonials.length;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white shadow-xl transition-all duration-700 ease-in-out ${
                    position === 0 
                      ? 'opacity-100 translate-x-0' 
                      : position === 1 
                      ? 'opacity-0 translate-x-full' 
                      : 'opacity-0 -translate-x-full'
                  }`}
                >
                  <img 
                    src={testimonial.image || 'https://i.pravatar.cc/100?img=1'} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
                  />
                  <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                  <h4 className="font-bold text-yellow-400">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              );
            })}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-darkbrown rounded-full p-3 hover:bg-yellow-300 transition shadow-lg"
          >
            ❮
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-darkbrown rounded-full p-3 hover:bg-yellow-300 transition shadow-lg"
          >
            ❯
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;