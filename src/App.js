import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import ProductsList from "./components/ProductList"; // Import the ProductPage component
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<ProductsList />} /> {/* New route for products list */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
