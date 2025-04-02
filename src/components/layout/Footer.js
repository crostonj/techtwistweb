import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    text: {
      primary: "#ffffff", // Customize text color
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" component="footer">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="body1" color="inherit" style={{ marginRight: "15px" }}>
            <Link href="/about" color="inherit" underline="hover">
              About
            </Link>
          </Typography>
          <Typography variant="body1" color="inherit">
            <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Footer;
