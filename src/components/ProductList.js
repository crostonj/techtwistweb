import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/apiService";
import {
  CircularProgress,
  Typography,
  Box,
  List,
  Alert,
  TextField,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ProductItem from "./ProductItem"; // Import the reusable component

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOptions, setSortOptions] = useState({
    price: false,
    name: false,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (!data || data.length === 0) {
          throw new Error("No products found");
        }
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(value)
      )
    );
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSortChange = (option) => {
    setSortOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const clearSort = () => {
    setSortOptions({
      price: false,
      name: false,
    });
    setAnchorEl(null);
  };

  const applySort = () => {
    let sortedProducts = [...filteredProducts];

    if (sortOptions.price) {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOptions.name) {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(sortedProducts);
    setAnchorEl(null);
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
      {filteredProducts.length > 0 ? (
        <List>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </List>
      ) : (
        <Typography variant="body1">No products available.</Typography>
      )}
    </Box>
  );
}

export default ProductsList;
