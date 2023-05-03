
import React from 'react';
import Navbar from '../../Components/Navbar';
import {StyledBackground} from '../../style/mainStyle';
import Hero from '../../views/Hero';
import RoadMap from '../../views/RoadMap';
import Footer from '../../Components/Footer';

const Main = () => {
  return (
    <StyledBackground>
      <Navbar/>
      <Hero/>
      <RoadMap/>
      <Footer/>
  </StyledBackground>
  );
};




export default Main;