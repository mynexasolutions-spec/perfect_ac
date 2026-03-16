import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What areas do you cover in Hyderabad?", a: "We cover almost all major areas in Hyderabad including Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, Kukatpally, Mehdipatnam, Secunderabad, and surrounding areas. Our technicians are stationed across the city for fast dispatch." },
  { q: "Is there any visiting charge if I don't proceed with repair?", a: "We charge a nominal visiting fee of ₹350. If you decide to proceed with the repair or service, this fee is completely waived off from the total bill." },
  { q: "Do you use genuine spare parts?", a: "Yes, absolutely. We source our parts directly from OEMs (Original Equipment Manufacturers). We provide genuine parts with a warranty so you have complete peace of mind." },
  { q: "Do you provide any warranty on repairs?", a: "Yes! All our repairs and replaced parts carry a standard 30-day to 90-day warranty depending on the service/part. Please check with your technician for specifics on your replacement." },
  { q: "How fast can you arrive for an emergency AC issue?", a: "We offer priority same-day service. In most cases, if you book before 4 PM, our technician can arrive within 2 hours." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="container padding-y" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="text-center padding-bottom-large">
        <h4 className="section-subtitle text-secondary">HAVE QUESTIONS?</h4>
        <h2 className="section-title text-dark">Frequently Asked Questions</h2>
      </div>

      <div className="faq-unified-box">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${index === openIndex ? 'active' : ''}`}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            <div className="faq-question">
              <span>{faq.q}</span>
              <motion.div 
                animate={{ rotate: index === openIndex ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className={index === openIndex ? "text-primary" : "text-muted"}/>
              </motion.div>
            </div>
            <AnimatePresence initial={false}>
              {index === openIndex && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="faq-answer-inner">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
