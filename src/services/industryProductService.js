import industryProducts from '../data/industryProducts.json';

// Get all products from all industries
export const getAllProducts = () => {
  const allProducts = [];
  
  Object.keys(industryProducts).forEach(industryKey => {
    const industry = industryProducts[industryKey];
    Object.keys(industry.productAreas).forEach(areaKey => {
      const area = industry.productAreas[areaKey];
      area.products.forEach(product => {
        allProducts.push({
          ...product,
          industry: industryKey,
          industryName: industry.name,
          productArea: areaKey,
          productAreaName: area.name
        });
      });
    });
  });
  
  return allProducts;
};

// Get products by industry
export const getProductsByIndustry = (industryKey) => {
  if (!industryProducts[industryKey]) return [];
  
  const products = [];
  const industry = industryProducts[industryKey];
  
  Object.keys(industry.productAreas).forEach(areaKey => {
    const area = industry.productAreas[areaKey];
    area.products.forEach(product => {
      products.push({
        ...product,
        industry: industryKey,
        industryName: industry.name,
        productArea: areaKey,
        productAreaName: area.name
      });
    });
  });
  
  return products;
};

// Get products by industry and product area
export const getProductsByArea = (industryKey, areaKey) => {
  if (!industryProducts[industryKey] || !industryProducts[industryKey].productAreas[areaKey]) {
    return [];
  }
  
  const industry = industryProducts[industryKey];
  const area = industry.productAreas[areaKey];
  
  return area.products.map(product => ({
    ...product,
    industry: industryKey,
    industryName: industry.name,
    productArea: areaKey,
    productAreaName: area.name
  }));
};

// Get all industries
export const getIndustries = () => {
  return Object.keys(industryProducts).map(key => ({
    key,
    name: industryProducts[key].name
  }));
};

// Get product areas for an industry
export const getProductAreas = (industryKey) => {
  if (!industryProducts[industryKey]) return [];
  
  const industry = industryProducts[industryKey];
  return Object.keys(industry.productAreas).map(key => ({
    key,
    name: industry.productAreas[key].name
  }));
};

// Simulate API calls for existing apiService compatibility
export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getAllProducts());
    }, 500); // Simulate network delay
  });
};

export const fetchProductsByIndustry = async (industryKey) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getProductsByIndustry(industryKey));
    }, 500);
  });
};

export const fetchProductsByArea = async (industryKey, areaKey) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getProductsByArea(industryKey, areaKey));
    }, 500);
  });
};
