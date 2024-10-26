// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
// import logo from '../assets/logo.jpg'; // Update path as per your project structure
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer bg-white py-5">
      <Container>
        {/* Logo */}
        <div className="mb-4">
          <Link to="/" className="footer-logo">
            {/* <img src={logo} alt="FoodApp Logo" height="30" /> */}
          </Link>
        </div>

        <Row>
          {/* About Section */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">ABOUT US</h5>
            <ul className="list-unstyled">
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/work-with-us">Work With Us</Link></li>
              <li><Link to="/investor-relations">Investor Relations</Link></li>
              <li><Link to="/report-fraud">Report Fraud</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Zomaverse Section */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">FOODVERSE</h5>
            <ul className="list-unstyled">
              <li><Link to="/ordering">Food Ordering</Link></li>
              <li><Link to="/delivery">Quick Delivery</Link></li>
              <li><Link to="/dining">Dining Out</Link></li>
              <li><Link to="/nutrition">Nutrition Guide</Link></li>
              <li><Link to="/food-trends">Food Trends</Link></li>
            </ul>
          </Col>

          {/* For Restaurants Section */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">FOR RESTAURANTS</h5>
            <ul className="list-unstyled">
              <li><Link to="/partner">Partner With Us</Link></li>
              <li><Link to="/apps">Apps For You</Link></li>
              <li><Link to="/business">For Businesses</Link></li>
            </ul>
          </Col>

          {/* Learn More Section */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-heading">LEARN MORE</h5>
            <ul className="list-unstyled">
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Social Links & App Buttons */}
        <Row className="mt-4 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="social-links">
              <a href="https://linkedin.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
              <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            </div>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="me-3">
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" 
                alt="App Store" height="40" />
            </a>
            <a href="#">
              <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" 
                alt="Play Store" height="40" />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-top">
          <p className="text-muted small">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. 
            All trademarks are properties of their respective owners. 2008-{new Date().getFullYear()} © FoodApp™ Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;