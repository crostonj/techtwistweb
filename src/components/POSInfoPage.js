import React from "react";
import {
  Button,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

export default function POSInfoPage() {
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: 1200, mx: "auto" }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold">
          Simplify Sales. Empower Your Business.
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={2}>
          A modern, affordable Point of Sale system built for small businesses
          like yours.
        </Typography>
        <Box mt={3}>
          <Button variant="contained" size="large">
            Start Free Trial
          </Button>
        </Box>
      </Box>

      {/* Key Benefits */}
      <Grid container spacing={4} justifyContent="center" mb={8}>
        {[
          { icon: "💳", label: "Fast Checkout" },
          { icon: "📦", label: "Inventory Tracking" },
          { icon: "📈", label: "Sales Insights" },
          { icon: "👥", label: "Customer Management" },
        ].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.label}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3">{item.icon}</Typography>
              <Typography variant="h6" mt={2}>
                {item.label}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Who It’s For */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Built for Your Business
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {[
            "☕ Coffee Shops",
            "👗 Boutiques",
            "💇‍♀️ Salons",
            "🚚 Food Trucks",
            "🛍️ Retailers",
          ].map((biz) => (
            <Chip key={biz} label={biz} variant="outlined" />
          ))}
        </Box>
      </Box>

      {/* Features Section */}
      <Grid container spacing={3} mb={8}>
        {[
          "Touchscreen & Mobile POS",
          "Staff Permissions & Time Tracking",
          "Offline Mode",
          "Barcode Scanner Integration",
          "QuickBooks & Shopify Sync",
          "Cloud Backup",
        ].map((feature) => (
          <Grid item xs={12} sm={6} key={feature}>
            <Box display="flex" alignItems="center" gap={2}>
              <CheckCircleIcon color="success" />
              <Typography>{feature}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pricing Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Simple, Honest Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {["Starter", "Pro", "Enterprise"].map((tier) => (
            <Grid item xs={12} md={4} key={tier}>
              <Card sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {tier}
                </Typography>
                <Typography variant="body2" color="text.secondary" my={2}>
                  Includes all core features
                </Typography>
                <Button variant="outlined">Choose Plan</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box mb={8}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Maria, Boutique Owner",
              quote: "I cut my checkout time in half!",
            },
            {
              name: "James, Food Truck Operator",
              quote: "Easiest POS I’ve ever used.",
            },
          ].map((t) => (
            <Grid item xs={12} sm={6} key={t.name}>
              <Card sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <StarIcon color="warning" />
                  <Typography variant="body1" fontStyle="italic">
                    “{t.quote}”
                  </Typography>
                </Box>
                <Typography variant="subtitle2" mt={1}>
                  – {t.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ */}
      <Box mb={8}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>
        {[
          [
            "Can I use my own hardware?",
            "Yes! Our system supports most third-party hardware.",
          ],
          ["Is there a contract?", "Nope. Cancel anytime, no questions asked."],
          [
            "What if I lose internet?",
            "Offline mode ensures you can still take payments.",
          ],
          [
            "Do you offer support?",
            "Absolutely. 24/7 customer support included.",
          ],
        ].map(([q, a]) => (
          <Accordion key={q}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Final CTA */}
      <Box textAlign="center">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Join 1,000+ small businesses already using SmartPOS
        </Typography>
        <Button variant="contained" size="large">
          Book a Demo
        </Button>
      </Box>
    </Box>
  );
}
