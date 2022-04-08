import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import useUserAuthActions from '../Redux/actions/Auth.js';
import GAMERSMEET from "../assets/images/GAMERSMEET.png";
import useAuth from '../hooks/useAuth';



const RegisterPage = () => {
    const [newUserData, setnewUserData] = useState({})
    const { handleRegister, isLoading, user, authError } = useAuth();



    const handleOnBlur = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const createLoginData = { ...newUserData }
        console.log(createLoginData);
        createLoginData[field] = value;
        setnewUserData(createLoginData)
    }
    const handleCreatePassword = e => {
        if (newUserData.password !== newUserData.password2) {
            alert('Your password did not match')
            return
        }
       handleRegister(newUserData.email,newUserData.password, newUserData.name)
        e.preventDefault()
    }

 return (
         <Container>
             <Grid container spacing={3}>
                 <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                     <Typography variant="body1" gutterBottom>Register</Typography>

                     {!isLoading &&
                         <form onSubmit={handleCreatePassword}>

                             <TextField
                                 sx={{ width: '75%', mt: 3, m: 1 }}
                                 name="email"
                                 onBlur={handleOnBlur}
                                 id="email"
                                 label="Your Email"
                                 type="email"
                                 variant="standard" />
                             <TextField
                                 sx={{ width: '75%', m: 1 }}
                                 name="password"
                                 onBlur={handleOnBlur}
                                 id="password"
                                 label="Your Password"
                                 type="password"
                                 variant="standard" />
                             <TextField
                                 sx={{ width: '75%', m: 1 }}
                                 name="password2"
                                 onBlur={handleOnBlur}
                                 id="standard-basic"
                                 label="Confirm your Password"
                                 type="password"
                                 variant="standard" />

                             <TextField
                                       sx= {{ width: '75%', m: 1 }}
                                       name="Epic username"
                                       onBlur={handleOnBlur}
                                       id="epicName"
                                       label="Enter your Epic Username"
                                       type="username"
                                       variant="standard" />

                             <br />
                             <Button
                                 variant="contained"
                                 sx={{ width: '75%', m: 1, mt: 2 }}
                                 type="submit"
                             >Register</Button>
                             <br />
                             <NavLink style={{ textDecoration: 'none' }} to="/login">
                                 <Button variant="text">Already Registered? Please Login</Button>
                             </NavLink>
                         </form>}
                     {isLoading && <CircularProgress />}
                     {user.email &&
                         <Alert severity="success">
                             Registration success
                         </Alert>}
                     {authError && <Alert severity="error">{authError}</Alert>}
                 </Grid>
                 <Grid item xs={12} md={6}>
                     <img style={{ width: '100%' }} src={GAMERSMEET} alt='' />
                 </Grid>
             </Grid>
         </Container>
     );
 };

export default RegisterPage;