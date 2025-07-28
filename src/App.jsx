import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import BrandDetail from "./pages/BrandDetail" // Import the BrandDetail component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand/:id" element={<BrandDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App