import {
    Typography, Link
} from '@mui/material';
import React from 'react';


function Legal(props) {
    const item = props.item;
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={item.homepage}>
                {item.company}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            / <Link href="/imprint" color="inherit" align='center'>Imprint - Legal Notice</Link>
        </Typography>
    );
}


function FooterSection(props) {
    const item = props.item;
    return (
        <>
            <Typography variant="h6" color="text.secondary" align='center'>
                {item.title}
            </Typography>
            <Legal item={item} />
        </>
    );
}

export default FooterSection;