import React from "react";
import { Box, ListItem, ListItemText, Typography } from "@mui/material";

const ProductItem = ({ product, onClick }) => {
  return (
    <ListItem
      sx={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemText
        primary={
          <>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={onClick} // Trigger navigation to ProductDetail
            >
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Brand: {product.brand}
            </Typography>
          </>
        }
        sx={{ flex: 1 }}
      />
      <Typography
        variant="body1"
        sx={{
          marginRight: "16px",
          fontWeight: "bold",
        }}
      >
        ${product.price}
      </Typography>
      <Box
        component="img"
        src={`/Products/${product.imageUrl}`}
        alt={product.name}
        sx={{
          width: 80,
          height: 80,
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </ListItem>
  );
};

export default ProductItem;