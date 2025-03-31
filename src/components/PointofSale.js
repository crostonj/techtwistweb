import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Box, Button, List, ListItem, ListItemText } from '@mui/material';

function PointofSale() {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem' }}>
      <Box component="header" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Point of Sale (POS) Systems
        </Typography>
        <Typography paragraph>
          A Point of Sale (POS) system is more than just a cash register. It's a comprehensive tool that manages your sales transactions, inventory, customer data, and provides valuable insights into your business performance.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Key Features:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Processing sales (cash, credit/debit, mobile payments)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Inventory tracking and management" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer database and CRM features" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reporting and analytics on sales, inventory, and customer behavior" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Integration with other business tools (e.g., accounting software)" />
          </ListItem>
        </List>
        <Typography variant="h6" component="h3" gutterBottom>
          Benefits for Your Business:
        </Typography>
        <Typography paragraph>
          Streamline checkout processes, reduce errors, gain real-time visibility into your stock levels, understand your best-selling products, and personalize customer interactions.
        </Typography>
        <Typography paragraph>
          <strong>Examples:</strong> Square, Shopify POS, Clover, Toast (for food), Lightspeed Retail.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/contact">
          Learn More About POS Systems
        </Button>
      </Box>
    </Container>
  );
}

export default PointofSale;
