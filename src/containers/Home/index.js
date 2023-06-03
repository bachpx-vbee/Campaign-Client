import React from 'react';
import Grid from '@mui/material/Grid';
import CampaignCard from '../../components/CampaignCard'
const App = () => {
    const movies = [
        {
            id: 1,
            name: 'Inception',
            description: 'A mind-bending thriller about dreams and reality.'
        },
        {
            id: 2,
            name: 'The Shawshank Redemption',
            description: 'The story of hope and friendship in the face of adversity.'
        },
        {
            id: 3,
            name: 'Pulp Fiction',
            description: 'A nonlinear crime film with dark humor and memorable characters.'
        },
        {
            id: 4,
            name: 'The Dark Knight',
            description: 'The iconic superhero film featuring Batman and The Joker.'
        },
        {
            id: 5,
            name: 'Fight Club',
            description: 'An intense exploration of identity and consumerism.'
        }
    ];
    return (
        <>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {movies.map((movie, i) =>
                    <Grid paddingTop={2} sx={{ width: "80%" }} key={i}>
                        <CampaignCard movie={movie} />
                    </Grid>
                )}
            </Grid>

        </>
    );
}

export default App;