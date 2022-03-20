/*var express = require("express");
//var morgan = require("morgan"); // logging may not need
var dotenv = require("dotenv");
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(path.join(__dirname,'FortniteTracker')));

//dotenv.config({path: path.join(__dirname,'FortniteTracker/config.env')});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/FortniteTracker/index.html'));
});

var uri = 'https://api.fortnitetracker.com/v1/powerrankings/';
app.post('/', function(req,res){
    console.log(req.body);
    request.get(uri +req.body.platformDropDownValue + '/' + req.body.regionDropDownValue + '/' +  req.body.epic, {
        headers : {
            'TRN-Api-Key' : '1e5bc329-5d20-445d-bce2-0af17ec79dee'
        }}
        , function(error, response,body) {
            console.log(body);
            res.json(body);
    });
});
*/

import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useUserAuth } from "../../AuthMethods/AuthMethods.js";

const DashboardPage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default DashboardPage;