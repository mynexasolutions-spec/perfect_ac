import React from 'react';
import { motion } from 'framer-motion';
import { Home, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div id="pricing" className="container" style={{ margin: '4rem auto' }}>
      <motion.div 
        className="discount-banner-premium"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="banner-content">
          <div className="banner-text">
            <h4 className="banner-tag">LIMITED TIME OFFER</h4>
            <h2 className="banner-heading">Complete AC Deep Cleaning <br/> Starting @ ₹499</h2>
            <p className="banner-subtext">Book your service today and get a free gas pressure check-up!</p>
            <div className="banner-actions">
               <Link to="/book" className="btn btn-primary lg">Claim Offer Now</Link>
               <span className="banner-visit">Home Visit Only ₹350</span>
            </div>
          </div>
          <div className="banner-image">
             <img src="/images/IMG_3211.JPG.jpeg" alt="AC Service Offer" />
             {/* Removed badge as requested */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
