import {
    Box,
} from '@mui/material';
import React from 'react';
import devcycle from '../images/devcycle_43_light.svg';
import TextRightSection from '../sections/TextRightSection';

const item = {
    title: 'API driven workflow for software projects',
    description: 'A digital workflow for API driven software integration. Customers design their software interfaces collaborative online in a team, view the document in the developer portal and download their beautiful crafted SDKs for integration.',
    image: devcycle,
};


function Workflow(props) {
    return (
        <Box sx={{ pt: 8, pb: 6 }}>
            <TextRightSection item={item} />
        </Box>
    );
}

export default Workflow;