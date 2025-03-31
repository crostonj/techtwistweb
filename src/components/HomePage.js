import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // You can create a CSS file for more styling

function HomePage() {
  return (
    <div className="homepage-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to TechTwist: Powering Your Retail Success with Smart
            Technology
          </h1>
          <p>
            Running a small retail business in today's world requires more than
            just great products. It demands smart, efficient operations and
            meaningful connections with your customers. At TechTwist, we
            understand these challenges, and we're here to guide you through the
            essential technologies that can help your business thrive.
          </p>
          <p>
            Explore the key concepts and important considerations that will
            empower you to make informed decisions about the tech that's right
            for your unique needs.
          </p>
          <Link to="/products" className="button">
            Explore Key Technologies
          </Link>{" "}
          {/* Example Call to Action */}
        </div>
        <div className="hero-image">
          {/* Replace with your actual image path */}
          <img src="/retail_technology_hero.jpg" alt="Retail Technology" />
        </div>
      </section>

      <section className="key-technologies">
        <h2>Key Technologies for Small Retail Businesses</h2>
        <div className="technology-grid">
          <div className="technology-item">
            <h3>Point of Sale (POS) Systems</h3>
            <p>
              A POS system handles transactions, manages inventory, tracks
              customer data, and generates reports.
            </p>
            <p>
              <strong>Benefits:</strong> Streamline checkout, real-time
              inventory, sales insights.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>E-commerce Platforms</h3>
            <p>
              An online store allows you to sell products online, expanding your
              reach and offering 24/7 sales.
            </p>
            <p>
              <strong>Benefits:</strong> Wider audience, increased sales, online
              brand presence.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Inventory Management Systems</h3>
            <p>
              Track stock levels, forecast demand, and optimize purchasing to
              prevent stockouts or overstocking.
            </p>
            <p>
              <strong>Benefits:</strong> Efficient inventory, reduced waste,
              optimized stock levels.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Customer Relationship Management (CRM)</h3>
            <p>
              Manage customer interactions, track data, personalize marketing,
              and improve customer service.
            </p>
            <p>
              <strong>Benefits:</strong> Customer loyalty, targeted marketing,
              improved retention.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Marketing Tools</h3>
            <p>
              Reach your target audience and promote your products effectively
              through various digital channels.
            </p>
            <p>
              <strong>Benefits:</strong> Brand awareness, customer engagement,
              increased sales.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Analytics and Reporting</h3>
            <p>
              Track sales data, website traffic, and customer behavior to gain
              insights into your business performance.
            </p>
            <p>
              <strong>Benefits:</strong> Data-driven decisions, trend
              identification, performance measurement.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Payment Processing Solutions</h3>
            <p>
              Enable secure and efficient processing of various payment methods,
              both in-store and online.
            </p>
            <p>
              <strong>Benefits:</strong> Customer convenience, reduced fraud
              risk, timely payments.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Communication Tools</h3>
            <p>
              Facilitate internal team collaboration and enhance customer
              support through various platforms.
            </p>
            <p>
              <strong>Benefits:</strong> Improved teamwork, enhanced customer
              service, streamlined workflows.
            </p>
            {/* You could add an icon here */}
          </div>
          <div className="technology-item">
            <h3>Security Systems</h3>
            <p>
              Protect your physical store, data, and customers with appropriate
              security measures.
            </p>
            <p>
              <strong>Benefits:</strong> Theft prevention, data protection,
              customer trust.
            </p>
            {/* You could add an icon here */}
          </div>
        </div>
      </section>

      <section className="key-considerations">
        <h2>Key Considerations When Choosing Technology</h2>
        <div className="consideration-list">
          <div className="consideration-item">
            <h3>Budget</h3>
            <p>
              Consider your financial resources and look for solutions that
              offer the best value.
            </p>
          </div>
          <div className="consideration-item">
            <h3>Ease of Use</h3>
            <p>
              Select technologies that are user-friendly and intuitive for you
              and your staff.
            </p>
          </div>
          <div className="consideration-item">
            <h3>Integration</h3>
            <p>
              Opt for solutions that can integrate with your existing systems
              for a streamlined workflow.
            </p>
          </div>
          <div className="consideration-item">
            <h3>Scalability</h3>
            <p>
              Choose technologies that can adapt and grow as your business
              expands.
            </p>
          </div>
          <div className="consideration-item">
            <h3>Customer Needs</h3>
            <p>
              Prioritize technologies that ultimately enhance the experience for
              your customers.
            </p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Take Your Retail Business to the Next Level?</h2>
        <p>
          Explore our detailed guides on each of these technologies or{" "}
          <Link to="/contact">contact us</Link> for personalized recommendations
          tailored to your specific business needs.
        </p>
        {/* You could add more specific calls to action here */}
      </section>
    </div>
  );
}

export default HomePage;
