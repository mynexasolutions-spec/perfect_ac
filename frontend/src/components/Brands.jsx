import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  { id: 1, name: "LG", logo: "https://logo.clearbit.com/lg.com" },
  { id: 2, name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { id: 3, name: "Daikin", logo: "https://logo.clearbit.com/daikin.com" },
  { id: 4, name: "Voltas", logo: "https://logo.clearbit.com/voltas.com" },
  { id: 5, name: "Hitachi", logo: "https://logo.clearbit.com/hitachi.com" },
  { id: 6, name: "Blue Star", logo: "https://logo.clearbit.com/bluestarindia.com" },
  { id: 7, name: "Carrier", logo: "https://logo.clearbit.com/carrier.com" },
  { id: 8, name: "Whirlpool", logo: "https://logo.clearbit.com/whirlpool.com" },
  { id: 9, name: "Haier", logo: "https://logo.clearbit.com/haier.com" },
  { id: 11, name: "Panasonic", logo: "https://logo.clearbit.com/panasonic.com" },
  { id: 12, name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
  { id: 13, name: "Godrej", logo: "https://logo.clearbit.com/godrej.com" },
  { id: 14, name: "Lloyd", logo: "https://logo.clearbit.com/mylloyd.com" }
];

const Brands = () => {
  return (
    <section id="brands" className="brands-marquee padding-y" style={{ background: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '100%', padding: '0 2%' }}>
        <div className="text-center mb-4">
          <h4 className="section-subtitle text-secondary">TOP BRANDS WE SERVE</h4>
          <h2 className="section-title text-dark" style={{ fontSize: '1.8rem' }}>Brands We Service & Stock Parts For</h2>
          <p className="text-muted">Genuine spare parts available for all major AC & Appliance brands</p>
        </div>
        
        <div className="brands-container-box glass">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            grabCursor={true}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1200: { slidesPerView: 8 },
            }}
            className="brands-slider"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-logo-card">
                  <img src={brand.logo} alt={brand.name} title={brand.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
