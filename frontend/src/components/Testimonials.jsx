import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Nairobi, Kenya',
      text: 'Exclusive 360 made our safari dream come true! The platinum package was worth every shilling.',
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'John D.',
      location: 'London, UK',
      text: 'Unforgettable experience! The attention to detail and luxury was beyond expectations.',
      image: 'https://i.pravatar.cc/100?img=2'
    },
    {
      name: 'Grace W.',
      location: 'Mombasa, Kenya',
      text: 'From the golden savanna to the starry nights, everything was perfect. Highly recommend!',
      image: 'https://i.pravatar.cc/100?img=3'
    },
    {
      name: 'Michael O.',
      location: 'Nakuru, Kenya',
      text: 'The gold package offered incredible value. Our guide was knowledgeable and friendly.',
      image: 'https://i.pravatar.cc/100?img=4'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds (infinite loop)
  useEffect(() => {
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

  return (
    <section id="testimonials" className="py-20 px-4 bg-darkgreen overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
        <p className="text-center text-yellow-400 mb-12">Real stories from real adventurers</p>

        <div className="relative max-w-3xl mx-auto">
          {/* Sliding Container */}
          <div className="relative h-64 overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to current
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
                    src={testimonial.image} 
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

          {/* Navigation Buttons */}
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

          {/* Dots Indicator */}
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