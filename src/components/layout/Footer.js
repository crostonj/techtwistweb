import React from "react";
import { AppBar, Toolbar, Typography, Link, Box, Button } from "@mui/material";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Back to Top Banner */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <Button
          variant="text"
          onClick={scrollToTop}
          sx={{
            color: "#1976d2",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Back to Top
        </Button>
      </Box>

      {/* Footer */}
      <AppBar 
        position="fixed" 
        color="primary" 
        component="footer"
        sx={{ 
          top: 'auto', 
          bottom: 0,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
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
