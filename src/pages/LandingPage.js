import React, { Component } from "react";
//materialUI
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
//components
import NavBarHome from "../components/Nav/NavBarHome.js";
import { Helmet } from "react-helmet";
//routing
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//styling
import "../styles/landing.css";
//assets
import separator from "../assets/images/separator.png";
import frame1BG from "../assets/images/frame1BG.png";
import esportBG from "../assets/videos/esportBG.mp4";




//const LandingPage = (props) => {
  //const navigate= useNavigate();
  export default class LandingPage extends Component {

      render() {

           // const { navigate } = this.props.navigation;

           return (
               <div className="LandingPage">
                 <div className="home-1">
                       <video id="videoBG" poster={frame1BG} playbackrate="0.75" autoPlay playsInline muted loop>
                           <source src={esportBG} widtype="video/mp4"></source>
                       </video>
                        <div>
                                  <p>Find Your Gaming Partner Today</p>
                                   <Link to="/register">
                                   <button
                                   className="e-button"
                                   > Find a Match
                                   </button>
                                   </Link>

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


//export default LandingPage;