import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our website! We are dedicated to providing the best products
        and services to our customers. Our mission is to deliver high-quality
        solutions that meet your needs and exceed your expectations.
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is passionate about innovation and excellence. We work hard to
        ensure that every interaction with our company is a positive experience.
        Thank you for choosing us!
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or feedback, feel free to{" "}
        <a href="/contact" style={{ color: "#1976d2", textDecoration: "none" }}>
          contact us
        </a>
        . We’d love to hear from you!
      </Typography>
    </Container>
  );
};

export default AboutUs;