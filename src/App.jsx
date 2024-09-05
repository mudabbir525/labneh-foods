import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import Footer from './pages/Footer'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact-us" element={<ContactUs />} />
         
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
