import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Paper } from '@mui/material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from '@mui/material';
import NavBar from "../components/Nav/NavBar.js";
import { NavLink } from 'react-router-dom';
import "../styles/landing.css";
import {
    frame1BG,
    esportBG,
    fortniteImage,
    separator,
} from "../assets/export.js";
import RegisterPage from './RegisterPage'
import { useHistory } from "react-router-dom";


   export default class LandingPage extends Component {
       render() {
           return (
               <div className="LandingPage">
                <Helmet><title>{this.props.title}</title></Helmet>

                   <div className="home-1">
                       <video id="videoBG" poster={frame1BG} playbackrate="0.75" autoPlay playsInline muted loop>
                           <source src={esportBG} type="video/mp4"></source>
                       </video>
                        <div>
                                  <p>Find Your Gaming Partner Today</p>

                                   <button
                                   className="e-button"
                                   onClick={() => this.history.push('/register')}

                                   > Find a Match
                                   </button>

                                   </div>
                                   </div>

                            <div className="svg-wrapper">
                                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                   <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                                     </svg>
                                      </div>
                         </div>
                               );
                           }

                       }
