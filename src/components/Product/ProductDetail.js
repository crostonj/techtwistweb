import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ProductDetail = ({ product, onBack }) => {
  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">No product selected.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Button variant="contained" onClick={onBack} sx={{ marginBottom: "20px" }}>
        Back to Products
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <Box
          component="img"
          src={`/Products/${product.imageUrl}`}
          alt={product.name}
          sx={{
            width: 200,
            height: 200,
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Brand: {product.brand}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${product.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;