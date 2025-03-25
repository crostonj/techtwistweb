import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyles = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  const ulStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const liStyles = {
    display: "inline",
    marginRight: "20px",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li style={liStyles}>
          <Link to="/" style={linkStyles}>
            Home
          </Link>
        </li>
        <li style={liStyles}>
          <Link to="/profile" style={linkStyles}>
            Profile
          </Link>
        </li>
        <li style={liStyles}>
          <Link to="/product/1" style={linkStyles}>
            Product
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/products" style={linkStyles}>
            Products
          </Link>{" "}
          {/* New link */}
        </li>
        {/* You can add more navigation links here */}
      </ul>
    </nav>
  );
}

export default Navbar;
