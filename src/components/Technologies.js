import {
    Box,
} from '@mui/material';
import React from 'react';
import technologies from '../images/technologies.png';
import TextLeftSection from '../sections/TextLeftSection';

const card = {
    title: 'Wide range of Technology SDKs',
    description: 'Use one of our SDKs to integrate your software with our API. We support a wide range of programming languages and frameworks.',
    image: technologies,
};


function Technologies(props) {
    return (
        <Box sx={{ pt: 8, pb: 6 }}>
            <TextLeftSection item={card} />
        </Box>
    );
}

export default Technologies;
