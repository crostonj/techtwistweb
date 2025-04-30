import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../services/apiService";
import {
  CircularProgress,
  Typography,
  Box,
  List,
  Alert,
} from "@mui/material";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

function ProductsList() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (!data || data.length === 0) {
          throw new Error("No products found");
        }
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
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

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBack} />;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      {filteredProducts.length > 0 ? (
        <List>
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)} // Pass the product to ProductDetail
            />
          ))}
        </List>
      ) : (
        <Typography variant="body1">No products available.</Typography>
      )}
    </Box>
  );
}

export default ProductsList;
