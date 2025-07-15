// Product service configuration for Kubernetes deployment
const getProductServiceUrl = () => {
  // In Kubernetes, use environment variables for service discovery
  // Fallback to local development URL if not set
  return process.env.REACT_APP_PRODUCT_SERVICE_URL || 
         process.env.REACT_APP_API_BASE_URL || 
         "http://10.0.0.201";
};

const PRODUCT_SERVICE_URL = getProductServiceUrl();

export const fetchProducts = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    // Add filters as query parameters
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.productArea) queryParams.append('productArea', filters.productArea);
    if (filters.search) queryParams.append('search', filters.search);
    if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
    if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
    
    const url = `${PRODUCT_SERVICE_URL}/product/list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(
      `${PRODUCT_SERVICE_URL}/product/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${PRODUCT_SERVICE_URL}/product/category/${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const fetchProductReviews = async (productId) => {
  try {
    const response = await fetch(
      `${PRODUCT_SERVICE_URL}/reviews/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching product reviews:', error);
    throw error;
  }
};

export const searchProducts = async (searchTerm) => {
  try {
    const response = await fetch(
      `${PRODUCT_SERVICE_URL}/product/search?q=${encodeURIComponent(searchTerm)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};
