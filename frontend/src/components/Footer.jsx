import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="pb-3 block" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src="/images/perfect-ac-logo.png" alt="Perfect Air Cool Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className="footer-desc mt-3">
              Premium air conditioning services in Bareilly. We specialize in repair, installation, and deep cleaning for all major brands.
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
                    <strong><a href="tel:9810103844">+91 9810103844</a></strong>
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
                    <strong>Bareilly, Uttar Pradesh</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-map mt-4">
          <iframe 
            src="https://www.google.com/maps?q=Bareilly%2C%20Uttar%20Pradesh&output=embed" 
            width="100%" 
            height="350" 
            style={{ border: 0, borderRadius: '20px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Perfect Air Cool Bareilly Location"
          ></iframe>
        </div>

        <div className="footer-bottom">
          <p style={{ textAlign: 'center' }}>
            Design and developed by{' '}
            <a href="https://nexa-solutions.in" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
              Nexa Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
