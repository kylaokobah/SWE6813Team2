//fetch fortnite API and then save information into database
import axios from "axios";
import { firestoreDb } from '../database/firebase'
import * as AT from '../Redux/fortnite/types'
import React, { useState } from 'react';

  export const FortniteAPI = () => {
  const [userStats, setUserStats] = useState([]);
  const [dataFetched, setdataFetched] = useState(false);
  const [epicName, setEpicName] = useState();
  const [error, seterror] = useState("");

  const fetchFortniteProfile = async  (username, platform, ) => {
    if (!username || !platform) {
        return;
    }
    try{




















        const res = await axios.get(
        'https://fortnite-api.com/v2/stats/br/v2/?name=${name}/{account_type}',
        {

            headers: {
            "Content-type": "application/json",
             "Access-Control-Allow-Origin": "*",
              "Authorization" : "8cf76a2e-6f92-4680-9614-037eab9e77ad"
            },
            }
            );

         setUserStats(res.data.data);
         setdataFetched(true); //will not print the results here
         setEpicName("");
         }  catch (error) {
         if (error.response.status === 404) {
                 return seterror("Account not found");
               }
               if (error.response.status === 400) {
                 return seterror("username is required");
               } else {
                 return seterror("Error while getting stats. Please try again later");
               }
             }
             console.log("*****************************")
           }
           }