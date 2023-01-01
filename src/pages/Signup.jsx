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
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated, signup } from "../auth";
import Navbar from "../components/Navbar";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
    redirectToReferrer: false,
  });
  const { user } = isAuthenticated();
  const { name, email, password, error, loading, success } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
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

  const showSuccess = () =>
    success && (
      <Alert sx={{ mb: 2 }}>
        New account is created. Please <Link to="/signin">Sign in.</Link>
      </Alert>
    );

  const showLoading = () => loading && <LinearProgress />;

  const showForm = () => (
    <form>
      <Stack spacing={2}>
        <TextField
          required
          label="Name"
          variant="filled"
          fullWidth
          onChange={handleChange("name")}
        />
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
          required
          onChange={handleChange("password")}
          fullWidth
        />
        {loading ? (
          <Button variant="outlined" onClick={handleSubmit} disabled>
            Signup
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleSubmit}>
            Signup
          </Button>
        )}
      </Stack>
    </form>
  );

  const redirectUser = () => {
    if (user) {
      return <Navigate to="/home" />;
    }
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Signup
        </Typography>
        {showSuccess()}
        {showError()}
        {showForm()}
        <Typography mt={2} variant="subtitle1" gutterBottom>
          Already have account? <Link to="/signin">Signin</Link>
        </Typography>
        {showLoading()}
      </Container>
      {redirectUser()}
    </div>
  );
}

export default Signup;
