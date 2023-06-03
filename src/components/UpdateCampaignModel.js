import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function UpdateCampaignModel({ openUpdate, setOpenUpdate }) {
    const [form, setForm] = useState({
        name: '',
        description: '',
    })
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [inputFields, setInputFields] = useState([{ email: '', position: '' }]);

    const handleClose = () => {
        setOpenUpdate(false)
        setForm({
            name: '',
            description: '',
        })
        setInputFields([{ email: '', position: '' }])
    };

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
        console.log(form)
    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index] = { ...values[index], [event.target.id || 'position']: event.target.value };
        setInputFields(values);

    };

    const handleAddFields = () => {
        setInputFields([...inputFields, { email: '', position: '' }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
        setDeleteAlert(false);
    };

    const handleSubmit = () => {
        handleClose()
        const formResult = {
            ...form,
            member: [...inputFields]
        }
        console.log(formResult)
    }
    return (
        <Dialog open={openUpdate} fullWidth>
            <DialogTitle>Update Campaign</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Campaign Name
                </DialogContentText>
                <TextField
                    autoFocus
                    id="name"
                    fullWidth
                    onChange={onChange}
                />
                <DialogContentText>
                    Campaign Des
                </DialogContentText>
                <TextField
                    multiline
                    id="description"
                    fullWidth
                    onChange={onChange}
                />

                <DialogContentText sx={{ paddingTop: 4 }}>
                    <Typography fontWeight="bold">
                        Member
                    </Typography>
                </DialogContentText>


                {inputFields.map((inputField, index) => (
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={0}
                    >
                        <DialogContent sx={{ width: '60%', padding: 0 }} >
                            <DialogContentText >
                                Email
                            </DialogContentText>
                            <TextField
                                id="email"
                                autoFocus
                                fullWidth
                                value={inputFields[index].email || ''}
                                onChange={event => handleInputChange(index, event)}
                            />
                        </DialogContent>
                        <DialogContent sx={{ width: '30%' }}>
                            <InputLabel id="position">Position</InputLabel>
                            <Select
                                fullWidth
                                id="position"
                                value={inputFields[index].position || ''}
                                onChange={event => {
                                    handleInputChange(index, event)
                                }}
                            >
                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                <MenuItem value={'Operator'}>Operator</MenuItem>
                            </Select>
                        </DialogContent>
                        <div sx={{}}>
                            <Button sx={{ width: '10%', paddingTop: 3 }} onClick={() => setDeleteAlert(true)}>
                                <DeleteForeverIcon />
                            </Button>
                            <Dialog
                                open={deleteAlert}
                            >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure to delete member
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => setDeleteAlert(false)}>Disagree</Button>
                                    <Button onClick={() => handleRemoveFields(index)} autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Stack>
                ))}

                <Button onClick={() => handleAddFields()}>
                    <AddIcon />
                    Add new member
                </Button>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </DialogContent>
        </Dialog >
    )
}

export default UpdateCampaignModel