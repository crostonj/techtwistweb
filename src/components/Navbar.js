import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ display: "inline", marginRight: "20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline", marginRight: "20px" }}>
          <Link to="/profile" style={{ textDecoration: "none", color: "#333" }}>
            Profile
          </Link>
        </li>
        {/* You can add more navigation links here */}
      </ul>
    </nav>
  );
}

export default Navbar;
