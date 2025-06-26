import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function FoodBeveragePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Food & Beverage Technology Solutions
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Enhance your restaurant and food service operations with specialized technology solutions
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Restaurant POS Systems
              </Typography>
              <Typography variant="body1" paragraph>
                Specialized POS systems designed for restaurants with table management, 
                order tracking, split billing, and kitchen communication features.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Kitchen Display Systems
              </Typography>
              <Typography variant="body1" paragraph>
                Digital kitchen displays that streamline order management, reduce errors, 
                and improve kitchen efficiency with real-time order tracking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Online Ordering Platforms
              </Typography>
              <Typography variant="body1" paragraph>
                Integrated online ordering systems with mobile apps, delivery management, 
                and customer engagement tools to expand your reach.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Inventory & Menu Management
              </Typography>
              <Typography variant="body1" paragraph>
                Track ingredients, manage recipes, monitor food costs, and update 
                menus dynamically based on availability and profitability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Technology Needs for Food & Beverage
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Fast Order Processing:</strong> Handle high-volume orders during peak dining hours
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Kitchen Integration:</strong> Seamless communication between front-of-house and kitchen
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Delivery Management:</strong> Coordinate third-party delivery services and in-house delivery
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Food Safety Compliance:</strong> Track temperatures, expiration dates, and health regulations
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Customer Engagement:</strong> Loyalty programs, reservations, and personalized experiences
        </Typography>
      </Box>
    </Container>
  );
}

export default FoodBeveragePage;
