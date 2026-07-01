import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";           
import About from "./components/About";         
import Contact from "./components/Contact";    
import PackagesPage from "./components/PackagesPage";  
import DestinationsPage from "./components/DestinationsPage";  
import Blog from "./components/Blog";           // NEW
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import ScrollToTop from "./components/ScrollToTop";
import DestinationDetail from './components/DestinationDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />
        <Route path="/blog" element={<Blog />} />           {/* NEW */}
      </Routes>
      <Footer />
      <WhatsAppChat />
    </BrowserRouter>
  );
}

export default App;