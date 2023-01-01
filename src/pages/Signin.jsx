import {
  Alert,
  Button,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../auth";
import Navbar from "../components/Navbar";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();
  const {state} = useLocation()
  useEffect(() => {
    if(state)
    setValues({ ...values, error: state.alert });
  }, [])
  
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const showError = () =>
    error && (
      <Alert
        action={
          <IconButton
            color="inherit"
            size="small"
            onClick={() => {
              setValues({ ...values, error: false });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        severity="error"
        sx={{ mb: 2 }}
      >
        {error}
      </Alert>
    );

  const showLoading = () => loading && <LinearProgress />;

  const showForm = () => (
    <form>
      <Stack spacing={2}>
        <TextField
          required
          label="Email"
          variant="filled"
          fullWidth
          onChange={handleChange("email")}
        />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          onChange={handleChange("password")}
          fullWidth
          required
        />
        {loading ? (
          <Button variant="outlined" onClick={handleSubmit} disabled>
            Signin
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleSubmit}>
            Signin
          </Button>
        )}
      </Stack>
    </form>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user) return <Navigate to="/home" />;
    }
    if (user) {
      return <Navigate to="/home" />;
    }
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Signin
        </Typography>
        {showError()}
        {showForm()}
        <Typography mt={2} variant="subtitle1" gutterBottom>
          Don't have account? <Link to="/signup">Signup</Link>
        </Typography>
        {showLoading()}
      </Container>
      {redirectUser()}
    </div>
  );
}

export default Signin;
