import React from "react";
import "./DigitalMarketingExcellence.css";

const DigitalMarketingExcellence = () => {
  return (
    <div className="digital-marketing-container">
      <h1 className="title">Digital Marketing Excellence</h1>
      <p className="subtitle">
        Transform your digital presence with our comprehensive marketing solutions. We don't just
        run campaigns - we engineer digital success.
      </p>
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-value">150+</div>
          <div className="stat-label">Campaigns Launched</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">300%</div>
          <div className="stat-label">Average ROI Increase</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">50+</div>
          <div className="stat-label">Brands Transformed</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>
      <div className="services-grid">
        <div className="service-box">
          <h2 className="service-title">Performance Marketing</h2>
          <p className="service-description">
            Data-driven campaigns that deliver measurable ROI through advanced analytics and
            optimization strategies.
          </p>
          <ul className="service-list">
            <li>PPC Management</li>
            <li>Conversion Optimization</li>
            <li>Analytics & Reporting</li>
            <li>A/B Testing</li>
          </ul>
        </div>
        <div className="service-box">
          <h2 className="service-title">Social Media Strategy</h2>
          <p className="service-description">
            Build authentic connections with your audience across all major social platforms.
          </p>
          <ul className="service-list">
            <li>Content Creation</li>
            <li>Community Management</li>
            <li>Influencer Partnerships</li>
            <li>Social Commerce</li>
          </ul>
        </div>
        <div className="service-box">
          <h2 className="service-title">SEO & Content Marketing</h2>
          <p className="service-description">
            Dominate search results with strategic content that drives organic traffic and
            engagement.
          </p>
          <ul className="service-list">
            <li>Technical SEO</li>
            <li>Content Strategy</li>
            <li>Link Building</li>
            <li>Local SEO</li>
          </ul>
        </div>
        <div className="service-box">
          <h2 className="service-title">Marketing Automation</h2>
          <p className="service-description">
            Streamline your marketing processes with intelligent automation and personalization.
          </p>
          <ul className="service-list">
            <li>Email Campaigns</li>
            <li>Lead Nurturing</li>
            <li>Customer Journeys</li>
            <li>CRM Integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingExcellence;
