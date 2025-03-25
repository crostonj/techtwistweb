import React from "react";
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams();
    console.log(id);
  

  // Replace this with actual product data fetching or props
  const product = {
    id: 1,
    name: "Awesome Product",
    description: "This is a fantastic product that you will absolutely love!",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL
  };

  const productPageStyles = {
    padding: "20px",
    textAlign: "center",
    color: "white", // Assuming you want white text
  };

  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "20px",
  };

  const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "#007bff", // Example button color
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={productPageStyles}>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={imageStyles} />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button style={buttonStyles}>Add to Cart</button>
      {/* You can add more product details or actions here */}
    </div>
  );
}

export default ProductPage;
