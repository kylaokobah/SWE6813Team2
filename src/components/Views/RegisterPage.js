import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { Box, Container, Stack, Link, Paper } from '@mui/material';
import { FormControl, FormGroup, FormLabel, TextField, FormHelperText, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { authDb, googleProvider} from '../../database/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const RegisterPage = () => {
  let css = Styles();
  const navigate = useNavigate();

  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onChange"
  });
  const { errors } = formState;

  const onSubmit = async (user) => {
    try {
      const userRegister = await createUserWithEmailAndPassword(
        authDb,
        user.email,
        user.password,
      );
      navigate("/login");
      // console.log(user);
      alert((userRegister, 'Register is Successful!!'));
    } catch (error) {
      // console.log(error.message);
      alert(('Register is not Successful !!'));
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Box className={css.registerForm} maxWidth="sm" component={Paper} elevation={3}>
        <Container maxWidth="xs">
          <Typography variant="h2">Welcome to Register Form !</Typography>
          <form onSubmit={handleSubmit(onSubmit)} >
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>UserID</FormLabel>
                <TextField
                  type="text"
                  label="Enter a user ID"
                  size='small'
                  variant="outlined"
                  {...register("user ID", { required: true, pattern: /^[a-zA-Z _]+$/i, })}
                />
              </FormGroup>
              {errors.name && <FormHelperText error>Name is required*</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <TextField
                  type="email"
                  label="Enter your email address"
                  size='small'
                  variant="outlined"
                  {...register("email", { required: true, pattern: /^([\w.-]+)@([\w-]+\.)+([\w]{2,})$/i, })}
                />
              </FormGroup>
              {errors.email && <FormHelperText error>Email is required*</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <TextField
                  type="password"
                  label="Enter a password"
                  size='small'
                  variant="outlined"
                  {...register("password", { required: true, pattern: /[A-Za-z]{3}/, })}
                />
              </FormGroup>
              {errors.password && <FormHelperText error>Password is required*</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Confirm Password</FormLabel>
                <TextField
                  type="password"
                  label="Confirm Password"
                  size='small'
                  variant="outlined"
                  {...register("confirm", {
                    pattern: /[A-Za-z]{3}/,
                    required: 'Confirm Password is required*',
                    validate: value => value === getValues('password') || "Passwords must match",
                  })}
                />
              </FormGroup>
              {errors.confirm && <FormHelperText error>{errors.confirm.message}</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <Button type='submit' variant="contained">Submit</Button>
            </FormControl>
          </form>
          <Stack>Already have an Account? Please Click<Link component="a" href='/login' underline="hover" color="primary">Login</Link> </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
};

const theme = createTheme({
  typography: {
    h2: {
      marginBottom: '30px',
      fontSize: '1.5rem',
      fontWeight: '500',
      textAlign: 'center',
    },
  },
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          ".MuiFormLabel-root": {
            marginBottom: '15px',
            fontWeight: '900',
            fontFamily: 'Brutal, sans-serif',
          },
          ".MuiFormControl-root": {
            ".MuiFormLabel-root": {
              marginBottom: '0',
              fontWeight: '500',
              fontFamily: 'Brutal, sans-serif',
            },
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          flexDirection: 'unset',
          justifyContent: 'center',
          ".MuiLink-root": {
            marginLeft: '10px',
            fontWeight: '600',
          },
        },
      },
    },
  },
});

const Styles = makeStyles({
  registerForm: {
    padding: '30px 0',
    margin: '30px auto',
  },
});

export default RegisterPage;