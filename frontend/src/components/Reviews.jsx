import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Ravi Kumar', loc: 'Banjara Hills', initial: 'R', text: "Technician arrived on time and fixed our AC quickly. Very professional, clean work, and reasonable pricing. Highly recommended!" },
  { name: 'Sunita Reddy', loc: 'Gachibowli', initial: 'S', text: "Got my AC deep cleaned and gas refilled in one visit. Cooling is like new. Transparent pricing with no surprise charges at all." },
  { name: 'Prasad Naidu', loc: 'Madhapur', initial: 'P', text: "They detected a gas leakage immediately and fixed it safely. Very careful and professional. I feel safe using my AC again. Excellent service!" },
  { name: 'Arun Sharma', loc: 'Mehdipatnam', initial: 'A', text: "Same-day appointment was a big relief. Restored cooling on two ACs, checked gas lines, and gave safety tips. Very neat and reasonably priced." },
  { name: 'Sneha Patel', loc: 'Kukatpally', initial: 'S', text: "The team was very polite and skilled. They uninstalled my old split AC and installed the new one without any mess. Great job overall." },
  { name: 'Karthik V', loc: 'Jubilee Hills', initial: 'K', text: "Booked a service call for a noisy Window AC. The technician diagnosed a faulty fan motor and replaced it smoothly. Works silently now." },
  { name: 'Fatima Z.', loc: 'Tolichowki', initial: 'F', text: "I appreciate the transparency in pricing. The ₹99 visit charge was exactly as advertised, and they didn't push for unnecessary replacements." },
  { name: 'Rajesh Goud', loc: 'Secunderabad', initial: 'R', text: "Used their service for my office Cassette ACs. Prompt response and proper maintenance check. Will sign an AMC with them soon." }
];

const Reviews = () => {
  return (
    <section id="reviews" className="padding-y" style={{ overflow: 'hidden', width: '100vw' }}>
      <div className="container">
        <div className="text-center padding-bottom-large">
          <h4 className="section-subtitle text-secondary">CUSTOMER REVIEWS</h4>
          <h2 className="section-title text-dark">What Our Customers Say</h2>
          <p className="text-muted">Trusted by hundreds of households across Hyderabad.</p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="reviews-slider"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} style={{ height: 'auto' }}>
            <div className="review-card">
              <div className="review-author">
                <div className="author-avatar">{t.initial}</div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                </div>
              </div>
              <div>
                <div className="review-stars">
                  <Star fill="#facc15" size={12} /><Star fill="#facc15" size={12} />
                  <Star fill="#facc15" size={12} /><Star fill="#facc15" size={12} /><Star fill="#facc15" size={12} />
                </div>
                <p className="review-text">"{t.text}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
