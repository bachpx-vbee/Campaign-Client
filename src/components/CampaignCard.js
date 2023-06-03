import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CampaignDetail from './CampaignDetail';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function CampaignCard({ movie }) {

    const handleOpenDetail = () => {

    }
    return (
        <Card >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleOpenDetail()}>
                    <Link underline="none" to={`/campaign/${movie.id}`}>More Details</Link>
                </Button>
            </CardActions>

        </Card>
    )
}

export default CampaignCard