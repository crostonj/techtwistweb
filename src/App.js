import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductList";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-header">
          <Link to="/" className="header-link">
            <img
              src="/high_five_icon.svg"
              alt="Homepage Link"
              className="header-image"
            />
          </Link>
          <h1 style={{ margin: 0, marginLeft: "20px" }}>TechTwist</h1>{" "}
          {/* Added the title */}
        </div>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<ProductsList />} />
          </Routes>
        </div>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
