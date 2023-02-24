import {
  Box
} from '@mui/material';
import React from 'react';
import FooterSection from '../sections/FooterSection';

const item = {
  title: 'ApiGear - API driven software integration',
  company: 'ApiGear by Epic Games Inc.',
  homepage: 'https://apigear.io/',
}



function Footer(props) {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <FooterSection item={item} />
    </Box>
  );
}

export default Footer;