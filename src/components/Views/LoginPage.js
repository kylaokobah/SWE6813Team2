import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Container, Stack, Paper } from '@mui/material';
import { FormControl, FormGroup, FormLabel, TextField, FormHelperText, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { authDb, googleProvider} from '../../database/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import "./WelcomePage.css";


const LoginPage = () => {
  let css = Styles();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange"
  });
  const { errors } = formState;

  const [users, setUsers] = useState({
    email: '',
    password: '',
  });

  const [userCurrent, setUserCurrent] = useState({});

  onAuthStateChanged(authDb, (user) => {
    setUserCurrent(user);
  });

  const onSubmit = async () => {
    const { email, password } = users;
    try {
      const userLogin = await signInWithEmailAndPassword(
        authDb,
        email,
        password,
      );
      navigate("/");
      // console.log(user);
      alert((userLogin, 'Login is Successful!!'));
    } catch (error) {
      // console.log(error.message);
      navigate("/register");
      alert(('Login is not Successful !!'));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
  };

  // GoogleAuthProvider
  const signInWithGoogleAuthProvider = () => {
    signInWithPopup(authDb, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  return (
    <ThemeProvider theme={theme}>
      <Box className={css.loginForm}>
        <Container maxWidth="xs">
          <Typography variant="h2">Sign in with a Gamers Meet Account</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <TextField
                  name='email'
                  type="email"
                  label="Email"
                  size='small'
                  variant="outlined"
                  required
                  onChange={handleInputChange}

                />
              </FormGroup>
              {errors.email && <FormHelperText error>Email is required*</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>PassWord</FormLabel>
                <TextField
                  name='password'
                  type="password"
                  label="PassWord"
                  size='small'
                  variant="outlined"
                  required
                  onChange={handleInputChange}
                // {...register("password", { required: true, pattern: /[A-Za-z]{3}/, })}
                />
              </FormGroup>
              {errors.password && <FormHelperText error>PassWord is required*</FormHelperText>}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2, }}>
              <Button type='submit' size='large' variant="contained">Submit</Button>
            </FormControl>
          </form>
          <Stack spacing={2}>
            <Button
              size='large'
              onClick={signInWithGoogleAuthProvider}
              variant="contained" color="primary" startIcon={<GoogleIcon />}>
              Login with Google
            </Button>

          </Stack>

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
   MuiContainer:{
       styleOverrides: {
          root: {
             ".MuiDialog-root": {
                 position:'absolute!important',
               ".MuiDialog-scrollPaper": {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                ".MuiDialog-container": {
                  height: '100',
                  outline: '0',

                   ".MuiDialog-paper": {
                     color: 'rgba(255, 255, 255, 0.72)',
                     width: '100',
                     margin: '32',
                     position: 'relative',
                     overflowX: 'hidden',
                     overflowY: 'auto',
                     backgroundColor: '#20202',
                     ".MuiDialog-paperFullScreen": {
                       width: '100',
                       height: '100',
                       margin: '0',
                       maxWidth: '100',
                       maxHeight: 'none',
                       borderRadius: '0',

      MuiFormGroup: {
        styleOverrides: {
          root: {
            ".MuiFormLabel-root": {
              marginBottom: '15px',
              fontWeight: '900',
            },
            ".MuiFormControl-root": {
              border: '0',
              height: '85',
              margin: '0 auto',
              display: 'inline-flex',
              padding: '0',
              position: 'relative',
              minWidth: '0',
              maxWidth: '330',
              flexDirection: 'column',
              verticalAlign: 'top',
              background: 'white',

              ".MuiFormControl-marginNormal" : {
                marginTop: '0',
                marginBottom: '20',

                ".MuiFormControl-marginDense": {
                  marginTop: '8',
                  marginBottom: '4',

              ".MuiFormControl-fullWidth": {
                width: '100',

              ".MuiFormLabel-root": {
                marginBottom: '0',
                fontWeight: '500',
              },
            },
            },
            },
            },
          },
          },
          },
        },
        },
        },
        },
        },
      },

      MuiList: {
        styleOverrides: {
          root: {
            padding: '0',
            marginBottom: '18px',
            ".MuiListItem-root": {
              padding: '0',
              justifyContent: 'center',
              ".MuiLink-root": {
                marginLeft: '10px',
                fontWeight: '600',
              },
            },
          },
        },
      },
      },
    }
    }
  });

const Styles = makeStyles({
  loginForm: {
    padding: '30px 0',
  },
});

export default LoginPage;