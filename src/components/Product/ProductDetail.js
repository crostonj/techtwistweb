import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Chip,
  Card,
  CardContent,
  Container,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Badge,
  Tooltip,
  Avatar,
  LinearProgress,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Tabs,
  Tab
} from "@mui/material";
import {
  CheckCircle,
  Star,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  Share,
  LocalShipping,
  Security,
  Support,
  ArrowBack,
  Add,
  Remove,
  ThumbUp,
  Verified
} from "@mui/icons-material";
import { 
  fetchProductReviews, 
  getProductRating, 
  getRatingDistribution, 
  sortReviews,
  filterReviewsByRating 
} from "../../services/reviewService";

const ProductDetail = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [productRating, setProductRating] = useState({ averageRating: 0, totalReviews: 0 });
  const [ratingDistribution, setRatingDistribution] = useState({});
  const [reviewSort, setReviewSort] = useState('newest');
  const [ratingFilter, setRatingFilter] = useState('');
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (product) {
      const productReviews = fetchProductReviews(product.id);
      const rating = getProductRating(product.id);
      const distribution = getRatingDistribution(product.id);
      
      setReviews(productReviews);
      setFilteredReviews(productReviews);
      setProductRating(rating);
      setRatingDistribution(distribution);
    }
  }, [product]);

  useEffect(() => {
    let filtered = ratingFilter ? filterReviewsByRating(reviews, parseInt(ratingFilter)) : reviews;
    setFilteredReviews(sortReviews(filtered, reviewSort));
  }, [reviews, reviewSort, ratingFilter]);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <Typography variant="h6">No product selected.</Typography>
        </Box>
      </Container>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  // Mock data for enhanced display
  const inStock = true;
  const shippingInfo = "Free shipping on orders over $500";
  const warranty = "2-year manufacturer warranty";

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* Breadcrumb Navigation */}
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="#" onClick={onBack}>
            Products
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>
      </Box>

      {/* Back Button */}
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={onBack}
        sx={{ mb: 3 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Box
                component="img"
                src={`/Products/${product.imageUrl}`}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'contain',
                  borderRadius: 2,
                  backgroundColor: '#f5f5f5'
                }}
              />
            </Paper>
            
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
              <Tooltip title="Add to Wishlist">
                <IconButton
                  onClick={() => setIsFavorite(!isFavorite)}
                  color={isFavorite ? "error" : "default"}
                >
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton>
                  <Share />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>

        {/* Product Information */}
        <Grid item xs={12} md={6}>
          <Box>
            {/* Brand */}
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {product.brand}
            </Typography>

            {/* Product Name */}
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {product.name}
            </Typography>

            {/* Rating */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={productRating.averageRating} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {productRating.averageRating} ({productRating.totalReviews} reviews)
              </Typography>
            </Box>

            {/* Price */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" color="error" sx={{ fontWeight: 'bold' }}>
                {formatPrice(product.price)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free shipping on orders over $500
              </Typography>
            </Box>

            {/* Stock Status */}
            <Box sx={{ mb: 3 }}>
              <Chip
                icon={<CheckCircle />}
                label={inStock ? "In Stock" : "Out of Stock"}
                color={inStock ? "success" : "error"}
                variant="outlined"
              />
            </Box>

            {/* Product Description */}
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            {/* Key Features */}
            {product.features && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Key Features
                </Typography>
                <List dense>
                  {product.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {/* Quantity and Add to Cart */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Quantity
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <IconButton onClick={() => handleQuantityChange(-1)}>
                    <Remove />
                  </IconButton>
                  <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange(1)}>
                    <Add />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Only 12 left in stock
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                fullWidth
                sx={{ mb: 1, py: 1.5 }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Buy Now
              </Button>
            </Box>

            {/* Trust Badges */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              <Chip icon={<LocalShipping />} label="Free Shipping" size="small" />
              <Chip icon={<Security />} label="Secure Payment" size="small" />
              <Chip icon={<Support />} label="24/7 Support" size="small" />
            </Box>

            {/* Warranty Info */}
            <Typography variant="body2" color="text.secondary">
              {warranty}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Tabbed Section for Specifications and Reviews */}
      <Box sx={{ mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="product details tabs">
          <Tab label="Specifications" />
          <Tab label={`Reviews (${productRating.totalReviews})`} />
        </Tabs>

        {/* Specifications Tab */}
        {tabValue === 0 && product.specifications && (
          <Box sx={{ mt: 3 }}>
            <TableContainer component={Paper} elevation={1}>
              <Table>
                <TableBody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell
                        sx={{
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                          width: '30%'
                        }}
                      >
                        {key.replace('_', ' ')}
                      </TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* Reviews Tab */}
        {tabValue === 1 && (
          <Box sx={{ mt: 3 }}>
            {/* Reviews Summary */}
            <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {productRating.averageRating}
                    </Typography>
                    <Rating 
                      value={productRating.averageRating} 
                      precision={0.1} 
                      readOnly 
                      size="large"
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Based on {productRating.totalReviews} reviews
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <Box key={star} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" sx={{ minWidth: 20 }}>
                          {star}
                        </Typography>
                        <Star fontSize="small" sx={{ mx: 1, color: '#faaf00' }} />
                        <LinearProgress
                          variant="determinate"
                          value={productRating.totalReviews > 0 
                            ? (ratingDistribution[star] / productRating.totalReviews) * 100 
                            : 0}
                          sx={{ flex: 1, mr: 2, height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="body2" sx={{ minWidth: 30 }}>
                          {ratingDistribution[star] || 0}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            {/* Review Filters and Sorting */}
            {reviews.length > 0 && (
              <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Sort by</InputLabel>
                  <Select
                    value={reviewSort}
                    label="Sort by"
                    onChange={(e) => setReviewSort(e.target.value)}
                  >
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                    <MenuItem value="highest">Highest Rating</MenuItem>
                    <MenuItem value="lowest">Lowest Rating</MenuItem>
                    <MenuItem value="helpful">Most Helpful</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Filter by Rating</InputLabel>
                  <Select
                    value={ratingFilter}
                    label="Filter by Rating"
                    onChange={(e) => setRatingFilter(e.target.value)}
                  >
                    <MenuItem value="">All Ratings</MenuItem>
                    <MenuItem value="5">5 Stars</MenuItem>
                    <MenuItem value="4">4 Stars</MenuItem>
                    <MenuItem value="3">3 Stars</MenuItem>
                    <MenuItem value="2">2 Stars</MenuItem>
                    <MenuItem value="1">1 Star</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* Reviews List */}
            {filteredReviews.length > 0 ? (
              <Box>
                {filteredReviews.map((review) => (
                  <Paper key={review.id} elevation={1} sx={{ p: 3, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        {review.avatar}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle2" sx={{ mr: 1 }}>
                            {review.userName}
                          </Typography>
                          {review.verified && (
                            <Chip 
                              icon={<Verified />} 
                              label="Verified" 
                              size="small" 
                              color="success" 
                              variant="outlined"
                            />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating value={review.rating} readOnly size="small" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                            {formatDate(review.date)}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                          {review.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {review.comment}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Button
                            size="small"
                            startIcon={<ThumbUp />}
                            sx={{ textTransform: 'none' }}
                          >
                            Helpful ({review.helpful})
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  No reviews yet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Be the first to review this product!
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Additional Information Cards */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalShipping color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Shipping Info</Typography>
              </Box>
              <Typography variant="body2">
                Free standard shipping on orders over $500. Express shipping available for $29.99.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Warranty</Typography>
              </Box>
              <Typography variant="body2">
                2-year manufacturer warranty included. Extended warranty options available.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Support color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Support</Typography>
              </Box>
              <Typography variant="body2">
                24/7 customer support and technical assistance. Installation services available.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;