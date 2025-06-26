import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material"; 
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/user/ProfilePage";
import ProductsList from "./components/Product/ProductList";
import RetailTechnologyPage from "./components/RetailTechnologyPage";
import PointofSale from "./components/PointofSale";
import Footer from "./components/layout/Footer";
import "./App.css";
import POSInfoPage from "./components/POSInfoPage";
import AboutUs from "./pages/AboutUs"; // Import AboutUs component
import ContactUs from "./pages/ContactUs"; // Import ContactUs component
import RetailPage from "./pages/RetailPage";
import FoodBeveragePage from "./pages/FoodBeveragePage";
import PersonalServicesPage from "./pages/PersonalServicesPage";
import HealthWellnessPage from "./pages/HealthWellnessPage";
import HospitalityTourismPage from "./pages/HospitalityTourismPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Customize typography
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>

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
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/retailtechnologypage" element={<RetailTechnologyPage />} />
              <Route path="/pointofsale" element={<PointofSale />} />
              <Route path="/POSInfoPage" element={<POSInfoPage />} />
              <Route path="/retail" element={<RetailPage />} />
              <Route path="/food-beverage" element={<FoodBeveragePage />} />
              <Route path="/personal-services" element={<PersonalServicesPage />} />
              <Route path="/health-wellness" element={<HealthWellnessPage />} />
              <Route path="/hospitality-tourism" element={<HospitalityTourismPage />} />
            </Routes>
          </Container>
          <Footer />

      </Router>
    </ThemeProvider>
  );
}

export default App;
