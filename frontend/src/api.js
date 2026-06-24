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