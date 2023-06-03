import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../../components/Copyright";
import ForgotPasswordStyle from "./index.style";
import backgroundImage from "../../assets/images/authbackground.jpg";
import route from "../../constants/route";

const Forgot = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ForgotPasswordStyle>
      <Grid container component="main" className="grid-container">
        <CssBaseline />
        <Grid item xs={7}>
          <img
            src={backgroundImage}
            alt="background"
            className="background-image"
          />
        </Grid>
        <Grid item xs={5}>
          <Box className="box">
            <Avatar className="avatar round-border">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              className="form-box"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="button"
              >
                Send
              </Button>
              <Grid container>
                <Grid item>
                  <Link href={route.LOGIN} variant="body2">
                    Back to login
                  </Link>
                </Grid>
              </Grid>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ForgotPasswordStyle>
  );
};

export default Forgot;
