import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "../../components/Copyright";
import LoginStyle from "./index.style";
import route from "../../constants/route";
import backgroundImage from "../../assets/images/authbackground.jpg";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LoginStyle>
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
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              className="round-border"
            >
              <TextField
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                autoFocus
                className="text-field"
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="text-field"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="button"
              >
                Sign in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    name="forgot-password"
                    variant="body2"
                    href={route.FORGOT_PASSWORD}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link name="register" href={route.REGISTER} variant="body2">
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LoginStyle>
  );
};

export default Login;
