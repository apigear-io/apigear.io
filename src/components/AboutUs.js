import {
  Box, Container, Typography, CardMedia, Grid,
} from '@mui/material';
import React from 'react';

const item = {
  title: 'Title 1',
  description: 'Description 1',
};


// AboutUs is a container where we place on the left side an image and on the right side a title with text and an action button
function AboutUs(props) {


  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia sx={{ p: 2 }} component="img" image="https://source.unsplash.com/random/512x256" alt="random" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h6" component="h2">
                {item.title}
              </Typography>
              <Typography>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;