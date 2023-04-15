
import React from 'react';
import Navbar from '../../Components/Navbar';
import {StyledBackground} from '../../style/mainStyle';
import Hero from '../../Components/Hero';
import RoadMap from '../../Components/RoadMap';

const Main = () => {
  return (
    <StyledBackground>
      <Navbar/>
      <Hero/>
      <RoadMap/>
  </StyledBackground>
  );
};




export default Main;