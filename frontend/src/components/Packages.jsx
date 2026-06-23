const Packages = () => {
  const packages = [
    {
      tier: 'Platinum',
      price: 'KES 650,000',
      color: 'bg-gradient-to-r from-gray-300 to-yellow-400',
      features: ['Luxury lodge', 'Private safari', 'Gourmet meals', 'Helicopter tour']
    },
    {
      tier: 'Gold',
      price: 'KES 350,000',
      color: 'bg-gradient-to-r from-yellow-200 to-yellow-600',
      features: ['Mid-range lodge', 'Group safari', 'All meals', 'Boat cruise']
    },
    {
      tier: 'Bronze',
      price: 'KES 150,000',
      color: 'bg-gradient-to-r from-amber-600 to-amber-800',
      features: ['Budget camp', 'Group safari', 'Basic meals', 'Nature walk']
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-darkgreen mb-4">Our Safari Packages</h2>
        <p className="text-center text-darkbrown mb-12">Choose your perfect adventure</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`${pkg.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300`}>
              <h3 className="text-2xl font-bold text-darkbrown mb-2">{pkg.tier}</h3>
              <p className="text-3xl font-extrabold text-darkbrown mb-4">{pkg.price}</p>
              <ul className="text-darkbrown space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-darkbrown text-white py-2 rounded-lg hover:bg-darkgreen transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;