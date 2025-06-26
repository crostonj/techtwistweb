import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigation } from "../../context/NavigationContext";
import navigationData from "../../data/primaryNavigation.json";

function Navbar() {
  const [menuData, setMenuData] = useState([]);
  const [secondaryMenu, setSecondaryMenu] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    setIndustryFromPath, 
    setProductAreaFromLabel, 
    clearSelections,
    setIndustryName 
  } = useNavigation();

  useEffect(() => {
    // Load navigation data dynamically
    setMenuData(navigationData);
  }, []);

  // Update industry selection when location changes
  useEffect(() => {
    setIndustryFromPath(location.pathname);
  }, [location.pathname, setIndustryFromPath]);

  const handlePrimaryNavClick = (submenu, industryName, path) => {
    setSecondaryMenu(submenu || []);
    setIndustryFromPath(path);
    setIndustryName(industryName);
  };

  const handleSecondaryNavClick = (label) => {
    setProductAreaFromLabel(label);
    // Force navigation to products page to ensure we're in list view, not detail view
    navigate('/products');
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
                  onClick={() => handlePrimaryNavClick(item.submenu, item.label, item.path)}
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
                onClick={() => handleSecondaryNavClick(subItem.label)}
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
