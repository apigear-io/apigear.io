import {
    Box, Card, CardMedia, Container, Grid, Typography
} from '@mui/material';
import React from 'react';

// props.items is passed from the parent component
// props.items is an array of objects with the following structure:
// [
//     {
//         title: 'Title 1',
//         description: 'Description 1',
//         image: 'https://source.unsplash.com/random/512x256'
//     },
// ]


// FeatureListSection is a container where we place a title with text and a list of cards with an image, a title and a text
function FeatureListSection(props) {
    const items = props.items;
    return (
        <Box sx={{ pt: 8, pb: 6 }}>
            <Container>
                <Grid container spacing={4} justifyContent="space-evenly" alignItems="stretch">
                    {items.map((item) => (
                        <Grid item key={item.title} xs={12} sm={6} md={4}>
                            <Card sx={{ minHeight: '420px' }}>
                                <CardMedia sx={{ p: 2 }} component="img" image={item.image} alt="random" />
                                <Box sx={{ p: 3 }}>
                                    <Typography gutterBottom variant="h6">
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body2' color="text.secondary">
                                        {item.description}
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

export default FeatureListSection;