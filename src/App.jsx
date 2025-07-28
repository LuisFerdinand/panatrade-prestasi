import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import BrandDetail from "./pages/BrandDetail"
import ScrollToTop from "./components/ScrollToTop" // Import the ScrollToTop component
import Footer from "./components/Footer"

// Wrapper component to handle the route parameter and navigation
const BrandDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/'); // Navigate back to home page
  };
  
  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <BrandDetail 
      brandId={id} 
      onBackClick={handleBackClick}
      onExternalLinkClick={handleExternalLinkClick}
    />
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand/:id" element={<BrandDetailWrapper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App