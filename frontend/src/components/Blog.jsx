import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const postsPerPage = 6;

  const posts = [
    {
      id: 1,
      title: 'Wild Heart Clear Mind: A Safari in Kenya with David Whyte & Deborah Calmeyer',
      excerpt: 'The conversation continues with poet and philosopher David Whyte in 2027. Co-hosted by Deborah Calmeyer, this third in a trilogy of intimate safari retreats unfolds at Segera Retreat in the foothills of Mount Kenya.',
      category: 'Wonder',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      date: 'March 27, 2026',
      slug: 'wild-heart-clear-mind',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2u9CLDucz_U'
    },
    {
      id: 2,
      title: 'The architects of the Okavango Delta',
      excerpt: 'Experience one of the most pristine places on Earth - The Okavango Delta in Botswana.',
      category: 'Wonder',
      image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=800&q=80',
      date: 'March 18, 2026',
      slug: 'architects-okavango-delta',
      hasVideo: false
    },
    {
      id: 3,
      title: 'Botswana, the jewel of Africa',
      excerpt: 'Planning an unforgettable safari to Africa requires insight and discretion. Botswana offers extraordinary wildlife experiences. Explore the Okavango Delta, Linyanti Wildlife Reserve and Makgadikgadi Pans with Exclusive 360\'s expert guidance.',
      category: 'Wonder',
      image: 'https://images.unsplash.com/photo-1589177900326-900782f88a55?w=800&q=80',
      date: 'March 13, 2026',
      slug: 'botswana-jewel-africa',
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/embed/2u9CLDucz_U'
    },
    {
      id: 4,
      title: 'The Great Migration: Africa\'s Greatest Wildlife Spectacle',
      excerpt: 'Witness over 1.5 million wildebeest and zebras thunder across the plains of the Maasai Mara in one of the most incredible wildlife events on Earth.',
      category: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80',
      date: 'March 5, 2026',
      slug: 'great-migration-spectacle',
      hasVideo: false
    },
    {
      id: 5,
      title: 'Gorilla Trekking in Rwanda: A Life-Changing Encounter',
      excerpt: 'Deep in the misty Volcanoes National Park, encounter the gentle giants of the Virunga Massif in their natural habitat.',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      date: 'February 22, 2026',
      slug: 'gorilla-trekking-rwanda',
      hasVideo: false
    },
    {
      id: 6,
      title: 'Luxury Safari Camps: Redefining African Hospitality',
      excerpt: 'From tented camps under the stars to eco-lodges perched on riverbanks, discover the most extraordinary accommodations in the African wilderness.',
      category: 'Luxury Travel',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
      date: 'February 14, 2026',
      slug: 'luxury-safari-camps',
      hasVideo: false
    },
    {
      id: 7,
      title: 'Conservation Through Travel: Protecting Africa\'s Wildlife',
      excerpt: 'Learn how responsible tourism is making a difference in preserving Africa\'s iconic wildlife and their habitats for future generations.',
      category: 'Conservation',
      image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=800&q=80',
      date: 'February 5, 2026',
      slug: 'conservation-through-travel',
      hasVideo: false
    },
    {
      id: 8,
      title: 'Best Time to Safari: A Month-by-Month Guide',
      excerpt: 'Plan your perfect African safari with our comprehensive guide to the best wildlife viewing seasons across East and Southern Africa.',
      category: 'Travel Tips',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      date: 'January 28, 2026',
      slug: 'best-time-safari-guide',
      hasVideo: false
    }
  ];

  const categories = ['all', 'Wildlife', 'Adventure', 'Luxury Travel', 'Conservation', 'Travel Tips', 'Culture', 'Wonder', 'Giving', 'Wellbeing', 'Wisdom', 'Women'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const featuredPost = currentPosts.length > 0 ? currentPosts[0] : null;
  const remainingPosts = currentPosts.length > 1 ? currentPosts.slice(1) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) trigger.click();
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="pt-[85px] sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className={`relative rounded-2xl overflow-hidden mb-12 shadow-2xl bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B] min-h-[200px] sm:min-h-[250px] md:min-h-[280px] flex items-center justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.05) 20px,
                  rgba(255, 255, 255, 0.05) 21px
                )
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 text-center px-4 py-10">
            <span className="text-[#d1973e] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mt-2 font-serif">
              All Stories from <span className="text-[#d1973e] font-script">Exclusive</span> 360
            </h1>
            <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mt-4"></div>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto font-light">
              Explore the destinations, adventures, people and passions of our world.
            </p>
          </div>
        </div>

        {/* Filter & Search */}
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between py-4 sm:py-5 border-t border-b border-[#3B1F0B]/10 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap gap-4 sm:gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'text-[#800020] font-semibold border-b-2 border-[#800020]'
                    : 'text-[#3B1F0B]/60 hover:text-[#3B1F0B]'
                }`}
              >
                {category === 'all' ? 'View All' : category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-52 mt-3 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded border border-[#3B1F0B]/10 focus:outline-none focus:ring-2 focus:ring-[#d1973e] focus:border-transparent text-sm text-[#3B1F0B] placeholder-[#3B1F0B]/40"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3B1F0B]/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center my-4">
          <span className="text-[#3B1F0B]/50 text-sm font-light">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className={`mb-10 sm:mb-14 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="group grid md:grid-cols-2 gap-0 bg-[#FAF5EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#3B1F0B]/5 hover:border-[#800020]/20">
              <div className="relative h-64 md:h-[320px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {featuredPost.hasVideo && (
                  <button 
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                    onClick={() => window.open(featuredPost.videoUrl, '_blank')}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#3B1F0B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#d1973e] text-[#3B1F0B] text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-[#3B1F0B]/50 mb-3">
                  <span className="font-medium text-[#800020]">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#3B1F0B] font-serif mb-3 group-hover:text-[#800020] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-[#3B1F0B]/70 text-sm sm:text-base leading-relaxed font-light mb-4">
                  {featuredPost.excerpt}
                </p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#800020] font-semibold text-sm hover:gap-3 transition-all border-b border-transparent hover:border-[#800020] pb-0.5 w-fit"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid - Clean with proper spacing */}
        {remainingPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remainingPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group bg-[#FAF5EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-52 sm:h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {post.hasVideo && (
                    <button 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                      onClick={() => window.open(post.videoUrl, '_blank')}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg">
                        <svg className="w-5 h-5 text-[#3B1F0B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </button>
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#800020] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs text-[#3B1F0B]/50 mb-2">
                    <span>{post.date}</span>
                    <span>|</span>
                    <span className="text-[#800020] font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-light text-[#3B1F0B] font-serif mb-2 group-hover:text-[#800020] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#3B1F0B]/60 text-sm font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#800020] font-semibold text-sm hover:gap-3 transition-all border-b border-transparent hover:border-[#800020] pb-0.5 mt-3 w-fit"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-light text-[#3B1F0B] font-serif">No articles found</h3>
            <p className="text-[#3B1F0B]/60 mt-2 font-light">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 bg-[#800020] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3B1F0B] transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <nav className="flex items-center justify-between pt-6 mt-4 border-t border-[#3B1F0B]/10">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded border transition ${
                currentPage === 1
                  ? 'border-[#3B1F0B]/10 text-[#3B1F0B]/30 cursor-not-allowed'
                  : 'border-[#3B1F0B]/20 text-[#3B1F0B] hover:bg-[#800020] hover:text-white hover:border-[#800020]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`dots-${index}`} className="px-2 text-[#3B1F0B]/30 font-serif text-xl">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`w-8 h-8 flex items-center justify-center font-serif text-lg transition-colors ${
                      currentPage === page
                        ? 'text-[#800020] border-b-2 border-[#800020]'
                        : 'text-[#3B1F0B]/60 hover:text-[#3B1F0B] border-b-2 border-transparent hover:border-[#3B1F0B]/20'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded border transition ${
                currentPage === totalPages
                  ? 'border-[#3B1F0B]/10 text-[#3B1F0B]/30 cursor-not-allowed'
                  : 'border-[#3B1F0B]/20 text-[#3B1F0B] hover:bg-[#800020] hover:text-white hover:border-[#800020]'
              }`}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}

        {/* CTA Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#800020] to-[#3B1F0B] p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.05) 20px,
                  rgba(255, 255, 255, 0.05) 21px
                )
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 font-serif">
              Ready to <span className="text-[#d1973e] font-script">Experience</span> Africa?
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-4 max-w-lg mx-auto font-light">
              Let us help you plan the journey of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-[#d1973e] hover:bg-[#b8862e] text-[#3B1F0B] px-6 sm:px-8 py-2.5 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Start Planning ✧
              </button>
              <Link
                to="/packages"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-6 sm:px-8 py-2.5 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;