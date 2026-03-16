import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ padding: '0', maxWidth: '100%' }}>
          <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/images/IMG_3215.JPG.jpeg" alt="Logo" style={{ width: '35px', height: '35px', objectFit: 'cover', borderRadius: '50%' }} />
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark-text)' }}>Perfect AC</span>
          </Link>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#faq">FAQ</a>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-outline" style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}>Contact Us</Link>
            <Link to="/book" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}>Book Now</Link>
          </div>

          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-dropdown glass" 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', top: '100px', left: '15px', right: '15px', padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.95)', zIndex: 999, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <Link to="/" style={{ fontWeight: 600, padding: '10px', borderBottom: '1px solid #eee', color: 'var(--dark-text)' }}>Home</Link>
            <a href="/#services" style={{ fontWeight: 600, padding: '10px', borderBottom: '1px solid #eee', color: 'var(--dark-text)' }}>Services</a>
            <a href="/#reviews" style={{ fontWeight: 600, padding: '10px', borderBottom: '1px solid #eee', color: 'var(--dark-text)' }}>Reviews</a>
            <a href="/#faq" style={{ fontWeight: 600, padding: '10px', borderBottom: '1px solid #eee', color: 'var(--dark-text)' }}>FAQ</a>
            <Link to="/contact" style={{ fontWeight: 600, padding: '10px', borderBottom: '1px solid #eee', color: 'var(--dark-text)' }}>Contact</Link>
            <Link to="/book" className="btn btn-primary" style={{ marginTop: '10px', textAlign: 'center' }}>Book Service Online</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
