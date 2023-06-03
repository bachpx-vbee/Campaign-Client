import React from 'react'
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom/';

import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import UpdateCampaignModel from './UpdateCampaignModel';
export default function CampaignDetail() {
    const { id } = useParams()
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const handleUpdate = () => {
        setOpenUpdate(true)
    }
    const handleDeleteCampaign = () => {
        setOpenDelete(false)
    }
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            space={2}
            paddingTop={2}>
            <Card sx={{ width: "80%" }} >
                <h1>movie so: {id}</h1>
                <CardContent >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Typography gutterBottom variant="h5" component="div">
                            name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            name
                        </Typography>
                        <Typography>
                            member
                        </Typography>
                        <Typography>
                            member
                        </Typography>
                        <Typography>
                            member
                        </Typography>
                        <Typography>
                            member
                        </Typography>
                        <Typography paddingTop={2} justifyContent="space-around">
                            <Button onClick={handleUpdate}
                            ><BuildCircleIcon></BuildCircleIcon>Modify
                            </Button>
                            <Button sx={{ color: "red" }} onClick={() => setOpenDelete(true)}>
                                <DeleteForeverIcon></DeleteForeverIcon>Remove
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid paddingTop={2} sx={{ width: "80%" }}>
                        <UpdateCampaignModel openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} />
                    </Grid>
                    <Grid paddingTop={2} sx={{ width: "80%" }}>
                        <Dialog open={openDelete}>
                            <DialogContent>
                                <DialogContentText id="">
                                    Are you sure to Delete campaign
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpenDelete(false)}>Disagree</Button>
                                <Button onClick={() => handleDeleteCampaign()} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
