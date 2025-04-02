import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to TechTwist: Powering Your Retail Success with Smart Technology
        </Typography>
        <Typography variant="body1" paragraph>
          Running a small retail business in today's world requires more than just great products. It demands smart, efficient operations and meaningful connections with your customers. At TechTwist, we understand these challenges, and we're here to guide you through the essential technologies that can help your business thrive.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the key concepts and important considerations that will empower you to make informed decisions about the tech that's right for your unique needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/products"
          sx={{ mt: 2 }}
        >
          Explore Key Technologies
        </Button>
        <img
          src="/retail_technology_hero.jpg"
          alt="Retail Technology"
          style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
        />
      </Paper>

      <Typography variant="h4" gutterBottom>
        Key Technologies for Small Retail Businesses
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "Point of Sale (POS) Systems",
            description:
              "A POS system handles transactions, manages inventory, tracks customer data, and generates reports.",
            benefits: "Streamline checkout, real-time inventory, sales insights.",
          },
          {
            title: "E-commerce Platforms",
            description:
              "An online store allows you to sell products online, expanding your reach and offering 24/7 sales.",
            benefits: "Wider audience, increased sales, online brand presence.",
          },
          {
            title: "Inventory Management Systems",
            description:
              "Track stock levels, forecast demand, and optimize purchasing to prevent stockouts or overstocking.",
            benefits: "Efficient inventory, reduced waste, optimized stock levels.",
          },
          {
            title: "Customer Relationship Management (CRM)",
            description:
              "Manage customer interactions, track data, personalize marketing, and improve customer service.",
            benefits: "Customer loyalty, targeted marketing, improved retention.",
          },
          {
            title: "Marketing Tools",
            description:
              "Reach your target audience and promote your products effectively through various digital channels.",
            benefits: "Brand awareness, customer engagement, increased sales.",
          },
          {
            title: "Analytics and Reporting",
            description:
              "Track sales data, website traffic, and customer behavior to gain insights into your business performance.",
            benefits: "Data-driven decisions, trend identification, performance measurement.",
          },
          {
            title: "Payment Processing Solutions",
            description:
              "Enable secure and efficient processing of various payment methods, both in-store and online.",
            benefits: "Customer convenience, reduced fraud risk, timely payments.",
          },
          {
            title: "Communication Tools",
            description:
              "Facilitate internal team collaboration and enhance customer support through various platforms.",
            benefits: "Improved teamwork, enhanced customer service, streamlined workflows.",
          },
          {
            title: "Security Systems",
            description:
              "Protect your physical store, data, and customers with appropriate security measures.",
            benefits: "Theft prevention, data protection, customer trust.",
          },
        ].map((tech, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {tech.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {tech.description}
              </Typography>
              <Typography variant="body2">
                <strong>Benefits:</strong> {tech.benefits}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Key Considerations When Choosing Technology
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "Budget",
            description:
              "Consider your financial resources and look for solutions that offer the best value.",
          },
          {
            title: "Ease of Use",
            description:
              "Select technologies that are user-friendly and intuitive for you and your staff.",
          },
          {
            title: "Integration",
            description:
              "Opt for solutions that can integrate with your existing systems for a streamlined workflow.",
          },
          {
            title: "Scalability",
            description:
              "Choose technologies that can adapt and grow as your business expands.",
          },
          {
            title: "Customer Needs",
            description:
              "Prioritize technologies that ultimately enhance the experience for your customers.",
          },
        ].map((consideration, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {consideration.title}
              </Typography>
              <Typography variant="body2">{consideration.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Ready to Take Your Retail Business to the Next Level?
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our detailed guides on each of these technologies or{" "}
          <Link to="/contact" style={{ textDecoration: "none", color: "#007BFF" }}>
            contact us
          </Link>{" "}
          for personalized recommendations tailored to your specific business needs.
        </Typography>
      </Paper>
    </Container>
  );
}

export default HomePage;
