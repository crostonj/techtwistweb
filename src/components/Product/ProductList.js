import React, { useState, useEffect } from "react";
import { 
  fetchProducts, 
  fetchProductsByIndustry, 
  fetchProductsByArea
} from "../../services/industryProductService";
import { useNavigation } from "../../context/NavigationContext";
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
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Get navigation context
  const { 
    selectedIndustry, 
    selectedProductArea, 
    industryName,
    productAreaName
  } = useNavigation();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const productsData = await fetchProducts();
        
        if (!productsData || productsData.length === 0) {
          throw new Error("No products found");
        }
        
        setAllProducts(productsData);
        setFilteredProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Filter products based on navigation context
  useEffect(() => {
    const filterProducts = async () => {
      try {
        let products;
        
        if (selectedIndustry && selectedProductArea) {
          products = await fetchProductsByArea(selectedIndustry, selectedProductArea);
        } else if (selectedIndustry) {
          products = await fetchProductsByIndustry(selectedIndustry);
        } else {
          products = allProducts;
        }
        
        setFilteredProducts(products);
        // Clear selected product when navigation context changes
        setSelectedProduct(null);
      } catch (err) {
        console.error('Error filtering products:', err);
        setFilteredProducts([]);
      }
    };

    filterProducts();
  }, [selectedIndustry, selectedProductArea, allProducts]);

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
        {selectedIndustry && selectedProductArea 
          ? `${industryName} - ${productAreaName}` 
          : selectedIndustry 
          ? `${industryName} Products`
          : 'All Products'
        }
      </Typography>

      {/* Products List */}
      {filteredProducts.length > 0 ? (
        <List>
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </List>
      ) : (
        <Typography variant="body1">No products available for the selected category.</Typography>
      )}
    </Box>
  );
}

export default ProductsList;
