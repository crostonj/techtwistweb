import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function RetailPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Retail Technology Solutions
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Streamline your retail operations with cutting-edge technology designed for modern commerce
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Point of Sale Systems
              </Typography>
              <Typography variant="body1" paragraph>
                Modern POS systems that handle transactions, inventory tracking, and customer management 
                all in one integrated platform. Perfect for brick-and-mortar stores of any size.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Inventory Management
              </Typography>
              <Typography variant="body1" paragraph>
                Real-time inventory tracking with automated reorder points, barcode scanning, 
                and comprehensive reporting to optimize stock levels and reduce waste.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Payment Processing
              </Typography>
              <Typography variant="body1" paragraph>
                Secure payment processing solutions supporting credit cards, mobile payments, 
                contactless transactions, and emerging payment technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Customer Analytics
              </Typography>
              <Typography variant="body1" paragraph>
                Gain insights into customer behavior, purchase patterns, and preferences 
                to drive sales and improve customer satisfaction.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Technology Needs for Retail
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Scalable POS Systems:</strong> Handle high-volume transactions during peak periods
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Omnichannel Integration:</strong> Seamlessly connect online and offline sales channels
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Real-time Analytics:</strong> Make data-driven decisions to optimize operations
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Mobile Solutions:</strong> Enable staff mobility and improve customer service
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Security & Compliance:</strong> Protect customer data and meet regulatory requirements
        </Typography>
      </Box>
    </Container>
  );
}

export default RetailPage;
