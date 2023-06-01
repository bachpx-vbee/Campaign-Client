import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import CampaignCard from '../../components/CampaignCard'
import { useState } from 'react';
import { Icon } from '@mui/material';
import CreateCampaignModel from '../../components/CreateCampaignModel';
function App() {
    const [showCreateModel, setShowCreateModel] = useState(false)
    const [open, setOpen] = useState(false)
    const handleCreateCampaign = () => {
        setOpen(true);
    }
    return (
        <>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Grid paddingTop={2} sx={{ width: "80%" }}>

                </Grid>
            </Grid>

            <Button sx={{ position: 'fixed', bottom: 30, right: 30 }}>
                <Icon color="primary" sx={{ fontSize: 75 }} onClick={handleCreateCampaign}>add_circle</Icon>
            </Button>
            <Grid paddingTop={2} sx={{ width: "80%" }}>
                <CreateCampaignModel openCreate={open} setOpenCreate={setOpen} />
            </Grid>



        </>
    )
}

export default App