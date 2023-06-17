import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  Stack,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Typography,
  Select,
} from "@mui/material";
import { Add, DeleteForever } from "@mui/icons-material";

function UpdateCampaignModal({ props }) {
  const { openUpdate, setOpenUpdate } = props;
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [inputFields, setInputFields] = useState([{ email: "", position: "" }]);

  const handleClose = () => {
    setOpenUpdate(false);
    setForm({
      name: "",
      description: "",
    });
    setInputFields([{ email: "", position: "" }]);
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    console.log(form);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index] = {
      ...values[index],
      [event.target.id || "position"]: event.target.value,
    };
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { email: "", position: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setShowConfirmDelete(false);
  };

  const handleSubmit = () => {
    handleClose();
    const formResult = {
      ...form,
      member: [...inputFields],
    };
    console.log(formResult);
  };
  return (
    <Dialog open={openUpdate} fullWidth>
      <DialogTitle>Update Campaign</DialogTitle>
      <DialogContent>
        <DialogContentText>Campaign Name</DialogContentText>
        <TextField autoFocus id="name" fullWidth onChange={onChange} />
        <DialogContentText>Campaign Des</DialogContentText>
        <TextField multiline id="description" fullWidth onChange={onChange} />

        <DialogContentText sx={{ paddingTop: 4 }}>
          <Typography fontWeight="bold">Member</Typography>
        </DialogContentText>

        {inputFields.map((inputField, index) => (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <DialogContent sx={{ width: "60%", padding: 0 }}>
              <DialogContentText>Email</DialogContentText>
              <TextField
                id="email"
                autoFocus
                fullWidth
                value={inputFields[index].email || ""}
                onChange={(event) => handleInputChange(index, event)}
              />
            </DialogContent>
            <DialogContent sx={{ width: "30%" }}>
              <InputLabel id="position">Position</InputLabel>
              <Select
                fullWidth
                id="position"
                value={inputFields[index].position || ""}
                onChange={(event) => {
                  handleInputChange(index, event);
                }}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Operator"}>Operator</MenuItem>
              </Select>
            </DialogContent>

            <Button
              sx={{ width: "10%", paddingTop: 3 }}
              onClick={() => setShowConfirmDelete(true)}
            >
              <DeleteForever />
            </Button>
            <Dialog open={showConfirmDelete}>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure to delete member
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowConfirmDelete(false)}>
                  Disagree
                </Button>
                <Button onClick={() => handleRemoveFields(index)} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        ))}

        <Button onClick={() => handleAddFields()}>
          <Add />
          Add new member
        </Button>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateCampaignModal;
