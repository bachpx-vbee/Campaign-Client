import React from 'react';
import Grid from '@mui/material/Grid';
import CampaignCard from '../../components/CampaignCard'
import { movies } from '../../constants/dataTest';
const App = () => {
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