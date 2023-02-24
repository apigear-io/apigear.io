import {
  Box
} from '@mui/material';
import React from 'react';
import vehicleApi from '../images/vehicleApi.png';
import HeroSection from '../sections/HeroSection';

const item = {
  title: 'API driven software integration',
  subtitle: 'Integrate your favorite UI technology with any backends. Use one of our pre-built technology templates or create your own.',
  image: vehicleApi,
  action: {
    text: 'Read the docs',
    link: 'https://docs.apigear.io',
  },
};

function Hero(props) {
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <HeroSection item={item} />
    </Box>
  );
}

export default Hero;
