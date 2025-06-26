import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function HospitalityTourismPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hospitality & Tourism Technology Solutions
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Elevate guest experiences and streamline operations with cutting-edge hospitality technology
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Property Management Systems
              </Typography>
              <Typography variant="body1" paragraph>
                Comprehensive hotel management with reservation handling, room assignment, 
                housekeeping coordination, and guest service management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Online Booking Platforms
              </Typography>
              <Typography variant="body1" paragraph>
                Multi-channel booking engines with real-time availability, dynamic pricing, 
                and integration with major travel booking sites.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Guest Experience Technology
              </Typography>
              <Typography variant="body1" paragraph>
                Mobile check-in/out, digital room keys, in-room tablets, 
                concierge services, and personalized guest communication.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Revenue Management
              </Typography>
              <Typography variant="body1" paragraph>
                Dynamic pricing algorithms, demand forecasting, competitor analysis, 
                and yield optimization to maximize revenue per available room.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Technology Needs for Hospitality & Tourism
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Seamless Guest Journey:</strong> From booking to checkout, ensure smooth digital experiences
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Multi-Channel Distribution:</strong> Manage inventory across all booking channels
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Contactless Services:</strong> Mobile-first solutions for health and convenience
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Operational Efficiency:</strong> Automate housekeeping, maintenance, and staff coordination
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Data Analytics:</strong> Guest insights, performance metrics, and predictive analytics
        </Typography>
      </Box>
    </Container>
  );
}

export default HospitalityTourismPage;
