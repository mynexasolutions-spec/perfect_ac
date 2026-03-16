import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="pb-3 block">
              <span className="logo-text">Perfect <span className="text-primary">AC</span></span>
            </Link>
            <p className="footer-desc mt-3">
              Premium air conditioning services in Hyderabad. We specialize in repair, installation, and deep cleaning for all major brands.
            </p>
            <div className="social-links mt-4">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#brands">Brands Served</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-link-list">
              <li><a href="/#services">AC Repair</a></li>
              <li><a href="/#services">AC Gas Refilling</a></li>
              <li><a href="/#services">AC Installation</a></li>
              <li><a href="/#pricing">AC Deep Cleaning</a></li>
              <li><a href="/#services">Refrigerator Repair</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <div className="contact-item">
                  <span className="contact-icon"><Phone size={18} /></span>
                  <div className="contact-text">
                    <span>Call Us</span>
                    <strong>+91 97721 34944</strong>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-icon"><Mail size={18} /></span>
                  <div className="contact-text">
                    <span>Email Us</span>
                    <strong>info@perfectac.com</strong>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-icon"><MapPin size={18} /></span>
                  <div className="contact-text">
                    <span>Location</span>
                    <strong>Road No. 10, Banjara Hills, Hyderabad</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-map mt-4">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.917502099046!2d79.46020600000001!3d28.3915596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0068b91a9f0f5%3A0x1d1fe2e4895238a1!2sPERFECT%20AIR%20COOL%20CENTER!5e0!3m2!1sen!2sin!4v1773317967724!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0, borderRadius: '20px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Perfect Air Cool Center Location"
          ></iframe>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {new Date().getFullYear()} Perfect AC Services. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
