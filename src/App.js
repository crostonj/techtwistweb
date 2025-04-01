import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material"; // Import Material UI components
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/user/ProfilePage";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductList";
import RetailTechnologyPage from "./components/RetailTechnologyPage";
import PointofSale from "./components/PointofSale";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src="/high_five_icon.svg"
                alt="Homepage Link"
                style={{ height: "40px", marginRight: "20px" }}
              />
            </Link>
            <Typography variant="h6" component="div">
              TechTwist
            </Typography>
          </Toolbar>
        </AppBar>
        <Navbar />
        <Container style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/retailtechnologypage" element={<RetailTechnologyPage />} />
            <Route path="/pointofsale" element={<PointofSale />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
