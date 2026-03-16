import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Droplet, Home, Thermometer, Wind, MonitorSmartphone, Fan, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 1,
    title: 'AC Repair',
    desc: 'Expert diagnosis and repair of all AC faults.',
    details: 'Our expert technicians provide comprehensive diagnostics and repairs for all types of AC units, ensuring optimal performance and longevity.',
    points: ['Gas leak detection & fixing', 'Compressor repair', 'PCB repair', 'Fan motor issues'],
    currentImg: '/images/IMG_3215.JPG.jpeg',
    icon: <Settings />
  },
  {
    id: 2,
    title: 'AC Service / Cleaning',
    desc: 'Thorough cleaning for better cooling and efficiency.',
    details: 'Professional jet pump cleaning to remove dust and allergens, improving air quality and cooling efficiency significantly.',
    points: ['Indoor/Outdoor unit cleaning', 'Filter cleaning', 'Drain pipe clearing', 'Performance check'],
    currentImg: '/images/IMG_3213.JPG.jpeg',
    icon: <Wind />
  },
  {
    id: 3,
    title: 'AC Gas Refilling',
    desc: 'Detect leaks and refill refrigerant for max cooling.',
    details: 'Complete leak testing followed by precision gas refilling to restore your AC\'s cooling power to factory levels.',
    points: ['Pressure testing', 'Leak repair', 'Original refrigerant', 'Level calibration'],
    currentImg: '/images/IMG_3214.JPG.jpeg',
    icon: <Droplet />
  },
  {
    id: 4,
    title: 'AC Installation',
    desc: 'Safe and proper installation of Window & Split ACs.',
    details: 'Perfect installation with proper vacuuming and wall mounting to ensure no vibrations and maximum energy efficiency.',
    points: ['Uninstallation service', 'Wall mounting', 'Copper piping setup', 'Electrical wiring'],
    currentImg: '/images/IMG_3216.JPG.jpeg',
    icon: <Home />
  },
  {
    id: 5,
    title: 'AC Rent (Window & Split)',
    desc: 'Affordable AC rentals for homes and offices.',
    details: 'Get top-brand air conditioners on rent at affordable monthly rates with free maintenance and installation.',
    points: ['Zero maintenance cost', 'Free installation', 'Latest models', 'Flexible duration'],
    currentImg: '/images/IMG_3217.JPG.jpeg',
    icon: <Thermometer />
  },
  {
    id: 6,
    title: 'Cassette AC Service',
    desc: 'Specialized care for ceiling-mounted Cassette ACs.',
    details: 'Expert maintenance for commercial cassette units, focusing on drainage systems and filter deep-cleaning.',
    points: ['Drain pump testing', 'Ceiling grill cleaning', 'Remote troubleshooting', 'Chemical cleaning'],
    currentImg: '/images/IMG_3218.JPG.jpeg',
    icon: <Fan />
  },
  {
    id: 7,
    title: 'VRF & VRV Services',
    desc: 'Commercial level Variable Refrigerant Flow repairs.',
    details: 'Advanced servicing for complex VRF/VRV systems used in multi-story buildings and large commercial spaces.',
    points: ['Ducting audit', 'Control board repair', 'Loop testing', 'Efficiency optimization'],
    currentImg: '/images/IMG_3210.JPG.jpeg',
    icon: <Settings />
  },
  {
    id: 8,
    title: 'Chiller Plant Maintenance',
    desc: 'End-to-end maintenance of industrial Chiller Plants.',
    details: 'Preventive and breakdown maintenance for industrial-grade chiller plants to ensure uninterrupted cooling.',
    points: ['Water chemistry check', 'Tower maintenance', 'Pump servicing', 'Annual AMC'],
    currentImg: '/images/IMG_3220.JPG.jpeg',
    icon: <Settings />
  },
  {
    id: 9,
    title: 'AHU (Air Handling Unit)',
    desc: 'Servicing systems that regulate and circulate air.',
    details: 'Regulation and maintenance of air flow units to maintain perfect building temperature and humidity.',
    points: ['Filter replacement', 'Belt adjustment', 'Coil cleaning', 'Motor greasing'],
    currentImg: '/images/IMG_3208.JPG.jpeg',
    icon: <Wind />
  },
  {
    id: 10,
    title: 'Water Cooler Repair',
    desc: 'Commercial and residential water cooler servicing.',
    details: 'Specialized repairs for storage and instant water coolers used in offices, schools, and homes.',
    points: ['Tank cleaning', 'Thermostat repair', 'Gas charging', 'Tap replacement'],
    currentImg: '/images/IMG_3211.JPG.jpeg',
    icon: <Droplet />
  },
  {
    id: 11,
    title: 'Refrigerator Service',
    desc: 'Get your fridge cooling like new again.',
    details: 'Repairing all single, double door, and side-by-side refrigerators with genuine spare parts.',
    points: ['No cooling fix', 'Defrost issues', 'Door gasket repair', 'Compressor replacement'],
    currentImg: '/images/IMG_3216.JPG.jpeg',
    icon: <Thermometer />
  },
  {
    id: 12,
    title: 'Washing Machine Repair',
    desc: 'Fully automatic and semi-automatic repairs.',
    details: 'On-site repair for front load, top load, and semi-automatic washing machines of all brands.',
    points: ['Drum repair', 'Drain issues', 'Motherboard fix', 'Spin cycle problems'],
    currentImg: '/images/IMG_3212.JPG.jpeg',
    icon: <MonitorSmartphone />
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const openModal = (svc) => setSelectedService(svc);
  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center padding-bottom-large">
          <h4 className="section-subtitle text-primary">OUR SERVICES</h4>
          <h2 className="section-title text-dark">Expert <span className="text-primary">Appliance Repairs</span></h2>
          <p className="text-muted text-max-width">We offer a wide range of services for air conditioning units and household appliances. Professional work backed by warranty.</p>
        </div>

        <div className="grid-3">
          {servicesList.map((svc) => (
            <motion.div
              key={svc.id}
              className="service-card glass-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="service-img-wrap">
                <img src={svc.currentImg} alt={svc.title} className="service-img" />
                <div className="service-icon glass-icon">
                  {svc.icon}
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc text-muted">{svc.desc}</p>

                <div className="service-actions flex-between mt-2">
                  <button
                    className="btn btn-outline small-btn text-sm"
                    onClick={() => openModal(svc)}
                  >
                    Learn More
                  </button>
                  <Link to="/book" className="btn btn-primary small-btn text-sm">Book Now</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <motion.div
              className="modal-content glass"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-body">
                <div className="modal-img-side">
                  <img src={selectedService.currentImg} alt={selectedService.title} />
                  <div className="modal-icon-badge">
                    {selectedService.icon}
                  </div>
                </div>

                <div className="modal-text-side">
                  <h4 className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">Service Details</h4>
                  <h2 className="modal-title">{selectedService.title}</h2>
                  <p className="modal-desc">{selectedService.details || 'Professional service for your appliance.'}</p>

                  <div className="modal-features">
                    {selectedService.points && selectedService.points.map((point, idx) => (
                      <div key={idx} className="modal-feature-item">
                        <CheckCircle2 size={18} className="text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="modal-footer">
                    <Link
                      to="/book"
                      className="btn btn-primary w-full"
                      onClick={closeModal}
                    >
                      Book This Service Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
