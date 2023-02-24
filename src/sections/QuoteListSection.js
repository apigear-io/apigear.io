import {
    Container, Grid, Card, CardContent, Typography, Avatar, CardHeader,
} from '@mui/material';
import React from 'react';


function QuoteListSection(props) {
    const items = props.items;
    return (
        <Container>
            <Grid container spacing={2} justifyContent="space-evenly">
                {items.map((item) => (
                    <Grid item key={item.title} xs={12} sm={6} md={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardHeader avatar={<Avatar src={item.icon} />} title={item.name} subheader={item.company} />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default QuoteListSection;