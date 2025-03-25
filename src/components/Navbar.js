import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/product/1" className="navbar-link">
            Product
          </Link>
        </li>
        <li className="navbar-li" style={{ marginLeft: "auto" }}>
          {" "}
          {/* Optional: Add some left margin */}
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
