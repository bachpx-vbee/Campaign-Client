import {
  Box,
  Drawer,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Typography,
  Button,
} from "@mui/material";
import AdminDrawerStyle from "./index.style";

const AdminDrawer = (props) => {
  const { open, onClose } = props;
  return (
    <AdminDrawerStyle>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box className="drawer" sx={{ width: "25vw" }}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: "bold", textAlign: "center", mt: "25vh" }}
          >
            Add admin
          </Typography>
        </Box>
        <TextField
          required
          id="email"
          label="Email"
          autoFocus
          className="text-field"
          sx={{
            width: "15vw",
            ml: "auto",
            mr: "auto",
            mt: "4%",
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: "4%", width: "20%", ml: "auto", mr: "auto" }}
        >
          Submit
        </Button>
      </Drawer>
    </AdminDrawerStyle>
  );
};

export default AdminDrawer;
