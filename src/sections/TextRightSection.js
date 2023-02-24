import {
    Box, Container, Typography, CardMedia, Grid,
} from '@mui/material';
import React from 'react';

// props.item is passed from the parent component
// props.item is an object with the following structure:
// {
//     title: 'Title 1',
//     description: 'Description 1',
//     image: 'https://source.unsplash.com/random/512x256'
// }


// TextRightSection is a container where we place on the left side an image and on the right side a title with text
function TextRightSection(props) {
    const item = props.item;
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardMedia sx={{ p: 2 }} component="img" image={item.image} alt="random" />
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
    );
}

export default TextRightSection;