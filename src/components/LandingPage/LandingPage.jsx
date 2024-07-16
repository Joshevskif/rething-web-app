import React from 'react'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import Technologies from '../Technolgies/Technologies'
import Roadmap from '../Roadmap/Roadmap'
import DemoBooking from '../DemoBooking/DemoBooking'
import Timeline from '../Timeline/Timeline'

const LandingPage = () => {
  return (
    <>
      <NavigationMenu/>
      <Banner/>
      <Hero/>
      <Technologies/>
      <Roadmap/>
      <DemoBooking/>
      <Timeline/>
    </>
  )
}

export default LandingPage




// import React from 'react';
// import NavigationMenu from '../NavigationMenu/NavigationMenu';
// import Banner from '../Banner/Banner';
// import Hero from '../Hero/Hero';
// import Technologies from '../Technolgies/Technologies';
// import Roadmap from '../Roadmap/Roadmap';
// import DemoBooking from '../DemoBooking/DemoBooking';
// import TimelineWrapper from '../Timeline/Timeline'; // Ensure the path to Timeline.jsx is correct

// const LandingPage = () => {
//   const handleCallback = () => {
//     console.log('Element crossed the middle of the screen!');
//   };

//   return (
//     <>
//       <NavigationMenu />
//       <Banner />
//       <Hero />
//       <Technologies />
//       <Roadmap />
//       <DemoBooking />
//       <div className="App">
//         <h1>react-scroll-animation component</h1>
//         <div className="stub1">⬇️ scroll to start ⬇️</div>
//         <TimelineWrapper onCallback={handleCallback} />
//         <div className="stub2"></div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;
