import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import MyTextFeild from './MyTextFeild';
import { SiGnuprivacyguard } from 'react-icons/si';
// initial State

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
import { useStyles } from './styles';
const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();
  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
    setShowPassword(false);
    setFormData(initialState);
  };

  const formChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container
      maxWidth="xs"
      component="main"
      className={classes.form_container}
    >
      <Paper className={classes.paper}>
        <Typography gutterBottom variant="h4">
          {' '}
          <SiGnuprivacyguard /> {isSignUp ? `Let's SignUp` : `Let's SignIn`}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <MyTextFeild
                  name="firstName"
                  lable="First Name"
                  formChange={formChange}
                  type="text"
                  half
                  value={formData.firstName}
                />
                <MyTextFeild
                  name="lastName"
                  lable="Last Name"
                  formChange={formChange}
                  type="text"
                  half
                  value={formData.lastName}
                />
              </>
            )}

            <MyTextFeild
              name="email"
              lable="Email"
              formChange={formChange}
              type="email"
              value={formData.email}
            />
            <MyTextFeild
              name="password"
              lable="Password"
              formChange={formChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
              value={formData.password}
            />

            {isSignUp && (
              <MyTextFeild
                name="confirmPassword"
                lable="Confirm Password"
                formChange={formChange}
                type="password"
                value={formData.confirmPassword}
              />
            )}
            <Grid item sm={12} xs={12}>
              <Button
                variant="contained"
                className={classes.button}
                fullWidth
                type="submit"
              >
                {isSignUp ? 'SignUp' : 'SignIn'}
              </Button>
            </Grid>
            <Grid item sm={12} xs={12}>
              <Button fullWidth onClick={switchMode}>
                {isSignUp
                  ? `Already have an account?SignIn`
                  : `Don't have an account? SignUp`}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
