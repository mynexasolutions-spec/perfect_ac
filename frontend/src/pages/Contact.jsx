import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // In a real application, you would send this to the backend
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <PageTransition>
    <section className="page-gradient-bg contact-page-section">
      <div className="container">
      <div className="text-center padding-bottom-large">
        <h4 className="section-subtitle text-secondary">GET IN TOUCH</h4>
        <h2 className="section-title text-dark">Contact Us</h2>
        <p className="text-muted text-max-width" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Have a question or need emergency AC repair? We are available 7 days a week from 8 AM to 8 PM. Drop us a message or call directly.
        </p>
      </div>

      <div className="grid-2 align-start">
        <motion.div 
          className="contact-info glass" 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="mb-4 text-primary">Contact Information</h3>
          
          <div className="contact-item-row">
            <div className="icon-wrap bg-light-primary"><Phone className="text-primary"/></div>
            <div>
              <p className="font-bold text-dark mb-2" style={{ fontWeight: '600' }}>Call Us Directly</p>
              <p className="text-muted">+91-9772134944</p>
            </div>
          </div>
          
          <div className="contact-item-row">
            <div className="icon-wrap bg-light-secondary"><Mail className="text-secondary"/></div>
            <div>
              <p className="font-bold text-dark mb-2" style={{ fontWeight: '600' }}>Email Address</p>
              <p className="text-muted">support@perfectac.in</p>
            </div>
          </div>
          
          <div className="contact-item-row">
            <div className="icon-wrap bg-light-primary"><MapPin className="text-primary"/></div>
            <div>
              <p className="font-bold text-dark mb-2" style={{ fontWeight: '600' }}>Our Office</p>
              <p className="text-muted">Plot 124, Phase-II, Road No. 10,<br/>Banjara Hills, Hyderabad, TS 500034</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form glass"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="mb-4 text-dark">Send a Message</h3>
          
          {submitted ? (
             <div className="bg-light-primary text-primary" style={{ padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: '600' }}>
               Thank you! Your message has been sent successfully. Our team will contact you shortly.
             </div>
          ) : (
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                  <label className="input-label">Full Name</label>
                  <input type="text" className="form-control" {...register('name', { required: 'Name is required' })} placeholder="Enter your full name" />
                  {errors.name && <span className="error-msg">{errors.name.message}</span>}
                </div>
                
                <div className="input-group">
                  <label className="input-label">Phone Number</label>
                  <input type="tel" className="form-control" {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid 10-digit number' } })} placeholder="+91" />
                  {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
                </div>
                
                <div className="input-group">
                  <label className="input-label">Message</label>
                  <textarea className="form-control" rows="4" {...register('message', { required: 'Please enter your query' })} placeholder="How can we help you?"></textarea>
                  {errors.message && <span className="error-msg">{errors.message.message}</span>}
                </div>
                
                <button type="submit" className="btn btn-primary lg" style={{ width: '100%' }}>Send Message</button>
             </form>
          )}
        </motion.div>
      </div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Contact;
