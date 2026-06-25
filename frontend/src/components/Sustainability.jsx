const Sustainability = () => {
  const initiatives = [
    {
      icon: '🌿',
      title: 'Wildlife Conservation',
      description: 'We partner with local organizations to protect endangered species and their habitats.'
    },
    {
      icon: '👩‍🌾',
      title: 'Community Empowerment',
      description: 'Supporting local communities through education, employment, and sustainable tourism initiatives.'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly Practices',
      description: 'Minimizing environmental impact through waste reduction, renewable energy, and responsible tourism.'
    },
    {
      icon: '🌍',
      title: 'Cultural Preservation',
      description: 'Respecting and preserving the rich cultural heritage of African communities.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f5f0e8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#800020] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B1F0B] mt-2 font-serif">
            Sustainable <span className="text-[#800020]">Travel</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-[#3B1F0B]/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We believe in protecting the wild spaces and communities that make safari experiences possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-[#800020]/20 hover:border-[#800020] group"
            >
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3B1F0B] mb-2">
                {item.title}
              </h3>
              <p className="text-[#3B1F0B]/70 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;