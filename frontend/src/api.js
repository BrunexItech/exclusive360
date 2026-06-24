const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8007/api';

export const chatAPI = {
  sendMessage: async (message) => {
    const response = await fetch(`${API_BASE}/chat/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    if (!response.ok) {
      throw new Error('Server error');
    }
    
    const data = await response.json();
    return data.response || "No response from server.";
  }
};


export const heroAPI = {
  getHero: async () => {
    const response = await fetch(`${API_BASE}/hero/`);
    if (!response.ok) throw new Error('Failed to fetch hero');
    return response.json();
  }
};

export const packagesAPI = {
  getPackages: async () => {
    const response = await fetch(`${API_BASE}/packages/`);
    if (!response.ok) throw new Error('Failed to fetch packages');
    return response.json();
  }
};

export const whyChooseUsAPI = {
  getItems: async () => {
    const response = await fetch(`${API_BASE}/why-choose-us/`);
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  }
};

export const testimonialsAPI = {
  getTestimonials: async () => {
    const response = await fetch(`${API_BASE}/testimonials/`);
    if (!response.ok) throw new Error('Failed to fetch testimonials');
    return response.json();
  }
};


export const galleryAPI = {
  getImages: async () => {
    const response = await fetch(`${API_BASE}/gallery/`);
    if (!response.ok) throw new Error('Failed to fetch gallery images');
    return response.json();
  }
};