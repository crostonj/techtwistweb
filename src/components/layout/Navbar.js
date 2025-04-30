import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" onClick={handleMenuOpen}>
            Retail Technology
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/RetailTechnologyPage"
              onClick={handleMenuClose}
            >
              Retail Technology
            </MenuItem>
            <MenuItem
              component={Link}
              to="/PointOfSale"
              onClick={handleMenuClose}
            >
              Point of Sale
            </MenuItem>
            <MenuItem
              component={Link}
              to="/POSInfoPage"
              onClick={handleMenuClose}
            >
              POSInfoPage
            </MenuItem>
          </Menu>
        </Box>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
