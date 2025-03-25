import React, { useState, useEffect } from "react";

function ProductsList() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/get-all-products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <p style={{ color: "white", textAlign: "center", padding: "20px" }}>
        Loading products...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ color: "red", textAlign: "center", padding: "20px" }}>
        Error loading products: {error.message}
      </p>
    );
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>All Products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <strong>{product.name}</strong> - ${product.price}
              {/* You can display more product details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductsList;
