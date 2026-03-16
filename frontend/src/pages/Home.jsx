import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Banner from '../components/Banner';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Brands from '../components/Brands';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <Services />
      <Brands />
      <Banner />
      <HowItWorks />
      <Reviews />
      <FAQ />
    </PageTransition>
  );
};

export default Home;
