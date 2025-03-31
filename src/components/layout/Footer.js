import React from "react";

function Footer() {
  const footerStyles = {
    backgroundColor: "blue",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    width: "100%",
  };

  const menuStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "inline-block",
  };

  const listItemStyles = {
    display: "inline",
    margin: "0 15px",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <footer style={footerStyles}>
      <ul style={menuStyles}>
        <li style={listItemStyles}>
          <a href="/about" style={linkStyles}>
            About
          </a>
        </li>
        <li style={listItemStyles}>
          <a href="/contact" style={linkStyles}>
            Contact Us
          </a>
        </li>
      </ul>
      {/* You can add copyright information or other footer content here */}
    </footer>
  );
}

export default Footer;
