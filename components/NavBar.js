import React from "react";

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
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </a>
        </li>
        {/* You can add more navigation links here */}
      </ul>
    </nav>
  );
}

export default Navbar;
