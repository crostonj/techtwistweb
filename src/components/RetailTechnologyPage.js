import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Define your custom theme here
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function RetailTechnologyPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ padding: '2rem' }}>
        <Box component="header" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Explore the Essential Tech for Modern Retail
          </Typography>
          <Typography variant="subtitle1">
            Discover the key technologies that can empower your small retail business to thrive in today's dynamic market.
          </Typography>
        </Box>

        <Box component="section" sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            E-commerce Platforms
          </Typography>
          <Typography paragraph>
            An e-commerce platform enables you to create and manage your online store, allowing you to sell your products to a global audience and cater to the growing number of online shoppers.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Product listings and catalogs" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Shopping cart functionality" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secure checkout processes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Order management and fulfillment tools" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Integration with payment gateways and shipping providers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Marketing and SEO features" />
            </ListItem>
          </List>
          <Typography variant="h6" component="h3" gutterBottom>
            Benefits for Your Business:
          </Typography>
          <Typography paragraph>
            Expand your market reach beyond your physical location, increase sales opportunities, provide convenience for your customers, and build a strong online brand presence.
          </Typography>
          <Typography paragraph>
            <strong>Examples:</strong> Shopify, WooCommerce, Etsy, BigCommerce, Wix Stores.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/contact">
            Explore E-commerce Platform Options
          </Button>
        </Box>

        <Box component="section" sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Inventory Management Systems
          </Typography>
          <Typography paragraph>
            Efficiently manage your stock levels and avoid costly stockouts or overstocking with an inventory management system. These systems help you track products, forecast demand, and automate purchasing.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Real-time inventory tracking" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Product information management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Low stock alerts and notifications" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Demand forecasting and reporting" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchase order management" />
            </ListItem>
          </List>
          <Typography variant="h6" component="h3" gutterBottom>
            Benefits for Your Business:
          </Typography>
          <Typography paragraph>
            Optimize your inventory investment, reduce waste from expired or unsold goods, improve order fulfillment accuracy, and save time on manual inventory tasks.
          </Typography>
          <Typography paragraph>
            <strong>Examples:</strong> Zoho Inventory, Cin7 Omni, Katana, Sortly, Fishbowl Inventory.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/contact">
            Find the Right Inventory System
          </Button>
        </Box>

        <Box component="section" sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Payment Processing Solutions
          </Typography>
          <Typography paragraph>
            Providing a seamless and secure payment experience is crucial for customer satisfaction. Payment processing solutions enable you to accept various payment methods conveniently.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Processing credit and debit card payments" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Support for mobile payment options (e.g., Apple Pay, Google Pay)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Online payment gateway integration" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secure transaction processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fraud prevention measures" />
            </ListItem>
          </List>
          <Typography variant="h6" component="h3" gutterBottom>
            Benefits for Your Business:
          </Typography>
          <Typography paragraph>
            Offer flexibility and convenience to your customers, reduce the risk of fraudulent transactions, and ensure smooth and efficient payment processing.
          </Typography>
          <Typography paragraph>
            <strong>Examples:</strong> Stripe, PayPal, Square Payments, Adyen.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/contact">
            Find the Right Payment Processor
          </Button>
        </Box>

        <Box component="section" sx={{ marginBottom: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Point of Sale (POS) Systems
          </Typography>
          <Typography paragraph>
            A POS system is essential for processing sales transactions, managing inventory, and generating sales reports. It can streamline your operations and improve customer service.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Sales transaction processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Inventory management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Customer relationship management (CRM)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sales reporting and analytics" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Employee management" />
            </ListItem>
          </List>
          <Typography variant="h6" component="h3" gutterBottom>
            Benefits for Your Business:
          </Typography>
          <Typography paragraph>
            Improve the efficiency of your sales process, gain insights into your sales performance, manage your inventory more effectively, and enhance customer satisfaction.
          </Typography>
          <Typography paragraph>
            <strong>Examples:</strong> Square POS, Lightspeed, Vend, Clover, Toast.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/pointofsale">
            Learn More About POS Systems
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RetailTechnologyPage;