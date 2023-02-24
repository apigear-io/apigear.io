import {
    Button, CardMedia, Container, Grid, Stack, Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react';

// props.item is passed from the parent component
// props.item is an object with the following structure:
// {
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     action: {
//         text: 'Action 1',
//         link: 'https://www.google.com'
//     },
//    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
// }

const HeroSection = (props) => {
    const item = props.item;

    return (
        <Container>
            <Grid container spacing={2} justifyContent="space-evenly">
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" component="h1" align="center" color="text.primary" gutterBottom>
                        {item.title}
                    </Typography>
                    <Typography variant="h5" component="h2" align="center" color="text.secondary" paragraph>
                        {item.subtitle}
                    </Typography>
                    <Stack sx={{ p: 4 }} direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" endIcon={<OpenInNewIcon />} href={item.action.link}>{item.action.text}</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} p={4}>
                    <CardMedia sx={{ m: 2, boxShadow: 2 }} component="img" image={item.image} alt="demo" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroSection;