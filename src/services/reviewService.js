import reviewsData from '../data/productReviews.json';

/**
 * Fetch reviews for a specific product
 * @param {string} productId - The product ID to fetch reviews for
 * @returns {Array} Array of review objects
 */
export const fetchProductReviews = (productId) => {
  return reviewsData[productId] || [];
};

/**
 * Calculate average rating for a product
 * @param {string} productId - The product ID
 * @returns {Object} Object containing average rating and total reviews
 */
export const getProductRating = (productId) => {
  const reviews = fetchProductReviews(productId);
  
  if (reviews.length === 0) {
    return { averageRating: 0, totalReviews: 0 };
  }
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  
  return {
    averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
    totalReviews: reviews.length
  };
};

/**
 * Get rating distribution for a product
 * @param {string} productId - The product ID
 * @returns {Object} Object with rating distribution (1-5 stars)
 */
export const getRatingDistribution = (productId) => {
  const reviews = fetchProductReviews(productId);
  
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
  reviews.forEach(review => {
    distribution[review.rating]++;
  });
  
  return distribution;
};

/**
 * Sort reviews by different criteria
 * @param {Array} reviews - Array of review objects
 * @param {string} sortBy - Sort criteria: 'newest', 'oldest', 'highest', 'lowest', 'helpful'
 * @returns {Array} Sorted array of reviews
 */
export const sortReviews = (reviews, sortBy = 'newest') => {
  const sortedReviews = [...reviews];
  
  switch (sortBy) {
    case 'newest':
      return sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    case 'oldest':
      return sortedReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    case 'highest':
      return sortedReviews.sort((a, b) => b.rating - a.rating);
    case 'lowest':
      return sortedReviews.sort((a, b) => a.rating - b.rating);
    case 'helpful':
      return sortedReviews.sort((a, b) => b.helpful - a.helpful);
    default:
      return sortedReviews;
  }
};

/**
 * Filter reviews by rating
 * @param {Array} reviews - Array of review objects
 * @param {number} rating - Rating to filter by (1-5)
 * @returns {Array} Filtered array of reviews
 */
export const filterReviewsByRating = (reviews, rating) => {
  if (!rating) return reviews;
  return reviews.filter(review => review.rating === rating);
};
