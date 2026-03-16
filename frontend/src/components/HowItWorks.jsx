import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="container padding-y block-margin-top">
      <div className="text-center padding-bottom-large">
        <h4 className="section-subtitle text-secondary">HOW IT WORKS</h4>
        <h2 className="section-title text-dark">3 Easy Steps to Get Serviced</h2>
        <p className="text-muted">From booking to fix — we make it effortless for you.</p>
      </div>

      <div className="grid-3 relative">
        <motion.div className="step-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="step-line"></div>
          <div className="step-img-wrap">
            <img src="/images/IMG_3215.JPG.jpeg" alt="Book Service" />
            <div className="step-number">1</div>
          </div>
          <div className="step-content">
            <h3 className="mb-2">Book Your Service</h3>
            <p className="text-muted text-sm">Call, WhatsApp, or fill our online form. Share your appliance issue and preferred time slot.</p>
          </div>
        </motion.div>

        <motion.div className="step-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="step-line"></div>
          <div className="step-img-wrap">
            <img src="/images/IMG_3216.JPG.jpeg" alt="Technician Visits" />
            <div className="step-number">2</div>
          </div>
          <div className="step-content">
            <h3 className="mb-2">Technician Visits</h3>
            <p className="text-muted text-sm">Our certified technician arrives at your doorstep with all tools and genuine spare parts.</p>
          </div>
        </motion.div>

        <motion.div className="step-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="step-img-wrap">
            <img src="/images/IMG_3218.JPG.jpeg" alt="Fix and Test" />
            <div className="step-number">3</div>
          </div>
          <div className="step-content">
            <h3 className="mb-2">Fix & Test</h3>
            <p className="text-muted text-sm">We repair, clean, test performance, and ensure everything works perfectly before leaving.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
