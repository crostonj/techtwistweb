import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

function HealthWellnessPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Health & Wellness Technology Solutions
      </Typography>
      
      <Typography variant="h6" color="text.secondary" paragraph>
        Transform your healthcare practice with technology that improves patient care and operational efficiency
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Electronic Health Records
              </Typography>
              <Typography variant="body1" paragraph>
                Comprehensive EHR systems that maintain patient records, track medical history, 
                and ensure HIPAA compliance with secure data management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Practice Management
              </Typography>
              <Typography variant="body1" paragraph>
                Streamline operations with appointment scheduling, patient check-in, 
                billing, insurance claims, and reporting all in one integrated platform.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Telehealth Platforms
              </Typography>
              <Typography variant="body1" paragraph>
                Secure video conferencing solutions for remote consultations, 
                patient monitoring, and virtual care delivery with integrated billing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Patient Engagement Tools
              </Typography>
              <Typography variant="body1" paragraph>
                Patient portals, mobile apps, automated reminders, and health tracking 
                tools to improve patient engagement and health outcomes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Technology Needs for Health & Wellness
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>HIPAA Compliance:</strong> Ensure patient data security and regulatory compliance
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Interoperability:</strong> Seamless data exchange between different healthcare systems
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Remote Care Capabilities:</strong> Support telehealth and remote patient monitoring
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Clinical Decision Support:</strong> AI-powered tools to assist in diagnosis and treatment
        </Typography>
        <Typography variant="body1" paragraph>
          • <strong>Revenue Cycle Management:</strong> Optimize billing, coding, and insurance processes
        </Typography>
      </Box>
    </Container>
  );
}

export default HealthWellnessPage;
