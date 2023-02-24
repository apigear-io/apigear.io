import {
    AppBar, Toolbar, IconButton, Typography, Button, Box
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function HeaderSection(props) {
    const item = props.item;
    return (
        <AppBar position="relative" elevation={0} color="transparent">
            <Toolbar disableGutters>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="span">
                    {item.title}
                </Typography>
                <Box px={6}>
                    {item.pages.map((page) => (
                        <Button color="inherit" href={page.link}>{page.title}</Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderSection;
