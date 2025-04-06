import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

function ProductTemplate({ product }) {
  const { name, description, price, imageUrl, details } = product;

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px auto", maxWidth: "600px" }}>
      <Box style={{ textAlign: "center" }}>
        <img
          src={imageUrl}
          alt={name}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Box>
      <Box style={{ marginTop: "20px" }}>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          Price: ${price}
        </Typography>
      </Box>
      <Box style={{ marginTop: "20px", textAlign: "center" }}>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Box>
      <Box style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>
        <Typography variant="body2">{details}</Typography>
      </Box>
    </Paper>
  );
}

export default ProductTemplate;