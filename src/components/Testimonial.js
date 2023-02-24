import {
  Box
} from '@mui/material';
import React from 'react';
import QuoteListSection from '../sections/QuoteListSection';


// Testimonial displays a row of three testimonials from customers. Each testimonial has a customer quote, a customer name, and a customer image and the company name.

const items = [
  {
    quote: 'Quote 1',
    icon: 'https://source.unsplash.com/random/320x240',
    name: 'Name 1',
    company: 'Company 1',
  },
  {
    quote: 'Quote 2',
    icon: 'https://source.unsplash.com/random/320x240',
    name: 'Name 2',
    company: 'Company 2',
  },
];

function Testimonial(props) {
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <QuoteListSection items={items} />
    </Box>
  );
}

export default Testimonial;