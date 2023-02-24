import {
  Box
} from '@mui/material';
import React from 'react';
import HeaderSection from '../sections/HeaderSection';

const item = {
  title: 'ApiGear',
  pages: [
    {
      title: 'Product',
      link: '/product',
    },
    {
      title: 'Features',
      link: '/features',
    },
    {
      title: 'Documentation',
      link: '/documentation',
    },
    {
      title: 'About',
      link: '/about',
    },
  ]
}

function Header(props) {
  return (
    <Box p={2}>
      <HeaderSection item={item} />
    </Box>
  );
};

export default Header;
