import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, PenToolIcon } from 'lucide-react';

const Features = () => {
  return (
    <section id="about" className="features-section">
      <div className="unified-trust-banner">
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="text-xxl">3000+</h2>
            <p className="text-muted">Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2 className="text-xxl">5000+</h2>
            <p className="text-muted">Services Done</p>
          </div>
          <div className="stat-item">
            <h2 className="text-xxl">4.8 <span style={{ fontSize: '2rem' }}>★</span></h2>
            <p className="text-muted">Avg. Rating</p>
          </div>
          <div className="stat-item">
            <h2 className="text-xxl">15+</h2>
            <p className="text-muted">Brands Served</p>
          </div>
        </div>

        <div className="features-banner">
          <div className="banner-item"><CheckCircle size={18} /> Certified technicians</div>
          <div className="banner-item"><CheckCircle size={18} /> Genuine spare parts</div>
          <div className="banner-item"><CheckCircle size={18} /> Transparent pricing</div>
          <div className="banner-item"><CheckCircle size={18} /> Service warranty</div>
        </div>
      </div>
      
      <div className="container">
        <div className="why-choose-split">
          <div className="why-img-side">
            <img src="/images/IMG_3211.JPG.jpeg" alt="Professional AC Service" />
          </div>
          
          <div className="why-text-side">
            <h4 className="section-subtitle">WHY CHOOSE US</h4>
            <h2 className="section-title">Your Home Deserves The Best Cooling</h2>
            <p className="text-muted mb-4">We bring certified expertise, genuine original spare parts, and fast doorstep service to every job in Hyderabad.</p>
            
            <div className="feature-cards grid-2-sm">
              <motion.div className="f-card" whileHover={{ y: -5 }}>
                <div className="icon-wrap bg-light-primary text-primary"><Shield size={24} /></div>
                <h4>Certified Techs</h4>
                <p className="text-sm text-muted">Trained professionals with years of hands-on experience.</p>
              </motion.div>
              <motion.div className="f-card" whileHover={{ y: -5 }}>
                <div className="icon-wrap bg-light-secondary text-secondary"><PenToolIcon size={24} /></div>
                <h4>Genuine Parts</h4>
                <p className="text-sm text-muted">Authentic OEM parts ensured for system longevity.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
