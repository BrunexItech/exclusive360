import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PackagesPage from './components/PackagesPage';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
      <Footer />
      <WhatsAppChat /> {/* Now shows on all pages */}
    </BrowserRouter>
  );
}

export default App;