import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function PersonalServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Personal Services Technology Solutions
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Optimize your personal service business with technology that enhances client experience and operations
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Appointment Scheduling
              </Typography>
              <Typography variant="body1" paragraph>
                Advanced booking systems with online scheduling, automated reminders, 
                waitlist management, and calendar synchronization for optimal efficiency.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Client Management Systems
              </Typography>
              <Typography variant="body1" paragraph>
                Comprehensive client profiles with service history, preferences, 
                notes, and communication logs to deliver personalized experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Payment & Billing
              </Typography>
              <Typography variant="body1" paragraph>
                Flexible payment solutions supporting tips, packages, memberships, 
                and recurring billing with secure payment processing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Staff Management
              </Typography>
              <Typography variant="body1" paragraph>
                Schedule management, commission tracking, performance analytics, 
                and resource allocation to optimize staff productivity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Technology Needs for Personal Services
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>24/7 Online Booking:</strong> Allow clients to schedule appointments anytime
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Client Communication:</strong> Automated reminders, confirmations, and follow-ups
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Service Customization:</strong> Flexible service packages and pricing options
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Mobile Accessibility:</strong> Manage business operations from anywhere
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Performance Analytics:</strong> Track key metrics like revenue, retention, and satisfaction
        </Typography>
      </Box>
    </Container>
  );
}

export default PersonalServicesPage;
