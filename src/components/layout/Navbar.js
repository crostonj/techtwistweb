import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import navigationData from "../../data/primaryNavigation.json";

function Navbar() {
  const [menuData, setMenuData] = useState([]);
  const [secondaryMenu, setSecondaryMenu] = useState([]);

  useEffect(() => {
    // Load navigation data dynamically
    setMenuData(navigationData);
  }, []);

  const handlePrimaryNavClick = (submenu) => {
    setSecondaryMenu(submenu || []);
  };

  return (
    <>
      {/* Primary Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {menuData.map((item, index) =>
              item.label !== "Profile" ? (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  onClick={() => handlePrimaryNavClick(item.submenu)}
                >
                  {item.label}
                </Button>
              ) : null
            )}
          </Box>
          <IconButton
            color="inherit"
            component={Link}
            to="/profile"
            sx={{ marginLeft: "auto" }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Secondary Navigation Bar */}
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            {secondaryMenu.map((subItem, subIndex) => (
              <Button
                key={subIndex}
                color="inherit"
                component={Link}
                to={subItem.path}
              >
                {subItem.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
