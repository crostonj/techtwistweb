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
} from "@mui/material";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

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
      {/* Filter Bar */}
      <Box sx={{ marginBottom: "20px" }}>
        <TextField
          label="Filter by name"
          variant="outlined"
          fullWidth
          value={filter}
          onChange={handleFilterChange}
        />
      </Box>
      {/* Product List */}
      {filteredProducts.length > 0 ? (
        <List>
          {filteredProducts.map((product) => (
            <ListItem key={product.id} sx={{ borderBottom: "1px solid #ccc" }}>
              <ListItemText
                primary={product.name}
                secondary={`Price: $${product.price}`}
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
