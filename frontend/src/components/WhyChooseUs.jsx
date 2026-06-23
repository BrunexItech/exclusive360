const WhyChooseUs = () => {
  const features = [
    {
      icon: '🦁',
      title: 'Expert Safari Guides',
      desc: 'Local knowledge with 10+ years of experience across East Africa.'
    },
    {
      icon: '🌍',
      title: 'Tailored Itineraries',
      desc: 'Custom trips designed around your preferences and budget.'
    },
    {
      icon: '🏕️',
      title: 'Luxury & Comfort',
      desc: 'Premium lodges, camps, and transport for a seamless experience.'
    },
    {
      icon: '🌅',
      title: 'Unforgettable Moments',
      desc: 'Sunset drives, bush dinners, and authentic cultural visits.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkgreen mb-4">Why Choose Us</h2>
        <p className="text-center text-darkbrown mb-12 max-w-2xl mx-auto">
          We go beyond expectations to create safaris that stay with you forever.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-darkgreen/5 hover:bg-darkgreen/10 transition hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-darkbrown mb-2">{item.title}</h3>
              <p className="text-darkbrown/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;