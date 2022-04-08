import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { authDb, googleProvider} from '../database/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, fetchSignInMethodsForEmail } from 'firebase/auth';
//import useUserAuthActions from '../Redux/actions/Auth.js';
import useAuth from '../hooks/useAuth';
import GAMERSMEET from "../assets/images/GAMERSMEET.png"
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

     const [loginData, setLoginData] = useState({})
     const { user, handleLogin, handleGoogle, isLoading, authError } = useAuth()
     const handleOnChange = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData }
         newLoginData[field] = value;
         setLoginData(newLoginData)
     }
     const handleLoginSubmit = e => {
        handleLogin(loginData.email, loginData.password)

         e.preventDefault()
     }
     const signInWithGoogleAuthProvider = () =>{
         handleGoogle()
     }
  return (
    <Container>
               <Grid container spacing={3}>
                   <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                       <Typography variant="body1" gutterBottom>Login</Typography>

                       {!isLoading &&
                       <>
                           <form onSubmit={handleLoginSubmit}>
                               <TextField
                                   sx={{ width: '75%', mt: 3, m: 1 }}
                                   name="email"
                                   onChange={handleOnChange}
                                   id="standard-basic"
                                   label="Your Email"
                                   variant="standard" />
                               <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   name="password"
                                   onChange={handleOnChange}
                                   id="standard-basic"
                                   label="Your Password"
                                   variant="standard" />
                               <br />
                               <Button
                                   variant="contained"
                                   sx={{ width: '75%', m: 1, mt: 2 }}
                                   type="submit"
                               >Login</Button>
                               <br />
                               <NavLink style={{ textDecoration: 'none' }} to="/register">
                                   <Button variant="text">New User? Please Register</Button>
                               </NavLink>
                           </form>

                           <Button
                                   variant="contained"
                                   onClick={handleGoogle}
                                   sx={{ width: '75%'}}
                                   type="submit">
                               Sign In with Google</Button>
                       </>
                       }

                {isLoading && <CircularProgress />}
                {user.email &&
                <Alert severity="success">

                 Registration success
                                   </Alert>

                                   }
        {authError && <Alert severity="error">{authError}</Alert>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} src={GAMERSMEET} alt='' />
                        </Grid>
                    </Grid>
                </Container>
            );
        };



export default LoginPage;