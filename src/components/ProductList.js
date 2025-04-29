import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/apiService"; // Import the fetchProducts function
import {
  CircularProgress,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Alert,
  TextField,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [anchorEl, setAnchorEl] = useState(null); // For the sort menu
  const [sortOptions, setSortOptions] = useState({
    price: false,
    name: false,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched products:", data); // Log the fetched products
        if (!data || data.length === 0) {
          throw new Error("No products found");
        }
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle filter input change
  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(value)
      )
    );
  };

  // Handle sort menu open/close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle sort option change
  const handleSortChange = (option) => {
    setSortOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Clear all sort options
  const clearSort = () => {
    setSortOptions({
      price: false,
      name: false,
    });
    setAnchorEl(null);
  };

  // Add this function to apply the sort options
  const applySort = () => {
    let sortedProducts = [...filteredProducts];

    if (sortOptions.price) {
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price (ascending)
    }

    if (sortOptions.name) {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name (alphabetical)
    }

    setFilteredProducts(sortedProducts);
    setAnchorEl(null); // Close the menu after applying the sort
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Alert severity="error">Error loading products: {error.message}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      {/* Filter Bar with Sort Button */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <TextField
          label="Filter by name"
          variant="outlined"
          fullWidth
          value={filter}
          onChange={handleFilterChange}
          sx={{ marginRight: "16px" }}
        />
        <Button variant="contained" onClick={handleMenuOpen}>
          Sort
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={sortOptions.price}
                  onChange={() => handleSortChange("price")}
                />
              }
              label="Sort by Price"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={sortOptions.name}
                  onChange={() => handleSortChange("name")}
                />
              }
              label="Sort by Name"
            />
          </MenuItem>
          <MenuItem>
            <Button
              variant="contained"
              color="primary"
              onClick={applySort}
              fullWidth
            >
              Apply Sort
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              variant="text"
              color="error"
              onClick={clearSort}
              fullWidth
            >
              Clear Sort
            </Button>
          </MenuItem>
        </Menu>
      </Box>
      {/* Product List */}
      {filteredProducts.length > 0 ? (
        <List>
          {filteredProducts.map((product) => (
            <ListItem
              key={product.id}
              sx={{
                borderBottom: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemText
                primary={
                  <>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description} {/* Add description here */}
                    </Typography>
                  </>
                }
                sx={{ flex: 1 }} // Ensures text takes up available space
              />
              <Typography
                variant="body1"
                sx={{
                  marginRight: "16px",
                  fontWeight: "bold",
                }}
              >
                ${product.price} {/* Price to the left of the image */}
              </Typography>
              {/* Product Image */}
              <Box
                component="img"
                src={`/Products/${product.imageUrl}`} // Prepend the base URL to the image path
                alt={product.name}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No products available.</Typography>
      )}
    </Box>
  );
}

export default ProductsList;
