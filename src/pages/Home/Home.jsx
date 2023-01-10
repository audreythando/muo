import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Counter from '../../components/Counter/Counter';
import HeaderTwo from '../../components/HeaderTwo/Header';
import Mission from '../../components/Mission/Mission'

const Home = () => {
  return (
    <>
      <HeaderTwo/>
      <Counter/>
      <Mission/>
      <Carousel/>
      
    </>
  );
}

export default Home;
