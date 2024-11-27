import React from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Technologies from '../Technolgies/Technologies';
import Roadmap from '../Roadmap/Roadmap';
import DemoBooking from '../DemoBooking/DemoBooking';
import Timeline from '../Timeline/Timeline';
import Footer from '../Footer/Footer';
import classes from './landingPage.module.css';

const LandingPage = () => {
  return (
    <div className={classes.pageWrapper}>
      <NavigationMenu />
      <Banner />
      <Hero />
      <Technologies />
      <Roadmap />
      <DemoBooking />
      <Timeline />
      <Footer />
    </div>
  );
};

export default LandingPage;
