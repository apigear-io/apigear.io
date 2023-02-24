import {
  Box, Card, CardMedia, Container, Grid, Typography
} from '@mui/material';
import React from 'react';
import accelerate from '../images/accelerate.png';
import unlock from '../images/unlock.png';
import analyze from '../images/analyze.png';

const items = [
  {
    title: 'Accelerate your integration story',
    description: 'Ease your software integration using an API driven approach using an object model.',
    image: accelerate,
  },
  {
    title: 'Simulate Service Backends',
    description: 'Simulate your service backends using our built-in simulator and unlock your integration. The simulator can be used for testing and development.',
    image: unlock,
  },
  {
    title: 'Analyze software behavior ',
    description: 'Analyze your software behavior using the built-in analytics. API analytics tracks the usage of your APIs and provides insights into the usage patterns.',
    image: analyze,
  },
];

function Features(props) {
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-evenly" alignItems="stretch">
          {items.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
              <Card sx={{ minHeight: '420px' }}>
                <CardMedia sx={{ p: 2 }} component="img" image={card.image} alt="random" />
                <Box sx={{ p: 3 }}>
                  <Typography gutterBottom variant="h6">
                    {card.title}
                  </Typography>
                  <Typography variant='body2' color="text.secondary">
                    {card.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;