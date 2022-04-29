const express = require('express');
const path = require('path');
const axios = require('axios');
const throttle = require('express-throttle');
const app = express();
const functions = require("firebase-functions");
const PORT = process.env.PORT || 5000;
//context provider
import { useAuthContext } from './useAuthContext'


// 3-party FortniteTracker has a limit of 1 request every 2 seconds
// Hence, we need to throttle in order to not get banned :)
const throttleOptions = {
    key: () => 'fst',
    burst: 1,
    rate: "1/3s"
}

//TRN-Api-Key
const ftOptions = {
    "headers": {
        'TRN-Api-Key': 'aa227680-b386-4fce-8fed-e6c8107dcfc4'
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
};

app.get('/api/profile/:platform/:username', throttle(throttleOptions), function(req, res, next) {
    const platform = req.params.platform;
    const username = req.params.username;
    const path = API.profile(platform, username);

    axios.get(path, ftOptions)
        .then((response) => {
            // Throw 404 if player not found
            if (response.data.error === 'Sorry, We Could Not Find Your Username. Try Again') {
                res.status(404).json({
                    errorType: 'PLAYER_NOT_FOUND'
                });
                return;
            }

            res.status(200).json({ profile: response.data });
        })
        .catch((err) => {
            console.log("[ERROR: /api/profile", err);
            res.status(500).json({ message: 'Something went wrong when fetching profile' })
        })
});

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
if (process.env.NODE_ENV !== 'production') {
    const Bundler = require('parcel-bundler');
    const file = 'src/index.html'; // Pass an absolute path to the entrypoint here
    const options = {
        logLevel: 4
    };
    
    // Initialize a new bundler using a file and options
    const bundler = new Bundler(file, options);    
    app.use(bundler.middleware());
}

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'dist')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
}
app.listen(PORT);

async function fetchFortniteProfile(){
const apiResponse = await axios
 const { user } = useAuthContext()
    .get(
        'https://api.fortnitetracker.com/v1/powerrankings/{platform}/{region}/{epic}' + //API
        'aa227680-b386-4fce-8fed-e6c8107dcfc4' //auth token
        )
        .then(function(response) {
         const data = response.data.data;
               const pagination = response.data.meta.pagination;

               // update pages
               const currentPage = pagination["current_page"];
               const totalPages = pagination["total_pages"];

               // loop through data
               for (const obj of data) {
                 updateDocToCollection(obj).then((res) => {
                   // Response inserted
                 });
               }

               if (!user) {
                 getResponseFromAPI();
                 window.addEventListener('load', function () {
                   alert("It's loaded!")
                 })
               }
             })
             .catch(function (error) {
               functions.logger.error(error);
             });
         }

         // updates data to collection
         async function updateDocToCollection(obj) {
           var firestore = admin.firestore();

           const dbResponse = await firestore
             .doc("player_profile/" + obj.id)
             .get()
             .then((result) => {
               if (!result.exists) {
                 firestore
                   .doc("player_profile/" + obj.id)
                   .set(obj)
                   .then(() => {
                     return obj;
                   });
               }
             })
             .catch((error) => {
               functions.logger.error(error);
             });
         }












