import React from "react";
import ProductTemplate from "./templates/ProductTemplate";

function ProductPage() {
  const product = {
    name: "Awesome Product",
    description: "This is a fantastic product that you will absolutely love!",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/300",
    details: "This product is made of high-quality materials and comes with a 1-year warranty.",
  };

  return (
    <div style={{ padding: "20px" }}>
      <ProductTemplate product={product} />
    </div>
  );
}

export default ProductPage;