import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import PageTransition from '../components/PageTransition';

const servicesOptions = [
  "AC Repair", "AC Service & Deep Cleaning", "AC Gas Refilling",
  "AC Installation / Uninstallation", "AC Rent", "Cassette AC Service",
  "VRF & VRV Services", "Chiller Plant Maintenance", "Refrigerator Repair",
  "Washing Machine Repair", "Others"
];

const Booking = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [booked, setBooked] = useState(false);

  const onSubmit = (data) => {
    console.log("Booking Confirmed:", data);
    setBooked(true);
  };

  return (
    <PageTransition>
      <section className="booking-section">
        <div className="container">
          <div className="text-center padding-bottom-large">
            <h4 className="section-subtitle text-primary">FAST & RELIABLE</h4>
            <h2 className="section-title text-dark">Book Service Online</h2>
            <p className="text-muted text-max-width booking-intro">
              Schedule an expert visit right now. Our certified technician will reach your location within 2 hours anywhere in Hyderabad.
            </p>
          </div>

          <div className="booking-card glass">
            {booked ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="booking-success">
                <div className="success-icon">✓</div>
                <h3 className="text-dark mb-2">Booking Confirmed!</h3>
                <p className="text-muted mb-4">Your service request has been logged. Our technician will contact you shortly to confirm the exact location.</p>
                <button onClick={() => setBooked(false)} className="btn btn-outline">Book Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                <div className="input-group full-width">
                  <label className="input-label">Select Service Needed</label>
                  <select className="form-control" {...register('service', { required: 'Please select a service' })}>
                    <option value="">-- Choose what needs fixing --</option>
                    {servicesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.service && <span className="error-msg">{errors.service.message}</span>}
                </div>

                <div className="input-group">
                  <label className="input-label">Full Name</label>
                  <input type="text" className="form-control" {...register('name', { required: 'Name is required' })} placeholder="e.g. Rahul Sharma" />
                  {errors.name && <span className="error-msg">{errors.name.message}</span>}
                </div>

                <div className="input-group">
                  <label className="input-label">Mobile Number</label>
                  <input type="tel" className="form-control" {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9]{10}$/, message: '10 digit number only' } })} placeholder="Phone Number" />
                  {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
                </div>

                <div className="input-group full-width">
                  <label className="input-label">Complete Address Details</label>
                  <textarea className="form-control" rows="3" {...register('address', { required: 'Address is required to dispatch technician' })} placeholder="House No, Street, Area..."></textarea>
                  {errors.address && <span className="error-msg">{errors.address.message}</span>}
                </div>

                <div className="input-group full-width">
                  <label className="input-label">Specific Issue Details (Optional)</label>
                  <input type="text" className="form-control" {...register('details')} placeholder="e.g. AC not cooling, making noise..." />
                </div>

                <div className="form-actions full-width">
                  <button type="submit" className="btn btn-primary lg booking-submit">
                    Confirm Booking • ₹350 Visit
                  </button>
                  <p className="text-sm text-muted mt-3">Charges for parts provided after inspection.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Booking;
