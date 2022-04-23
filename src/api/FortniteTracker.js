import axios from 'axios';

let populateProfile= "https://public-api.tracker.gg/api/v1/profile/{platform}/{epic-nickname}";
let populateMatchHistory= "https://api.fortnitetracker.com/v1/profile/account/{accountId}/matches";
let populateActiveChallenges= "https://api.fortnitetracker.com/v1/challenges";
let populatePowerRanking= "https://api.fortnitetracker.com/v1/powerrankings/{platform}/{region}/{epic}";

const requestProfile= axios.get(populateProfile);
const requestMatch= axios.get(populateMatchHistory);
const requestChallenges= axios.get(populateActiveChallenges);
const requestPowerRanks= axios.get(populatePowerRanking);

    //if one request fails all the requests will fail
    let promises=([requestProfile, requestMatch, requestChallenges, requestPowerRanks])
    headers: {"TRN-Api-Key": "8cf76a2e-6f92-4680-9614-037eab9e77ad"}


    Promise.all([requestProfile, requestMatch, requestChallenges, requestPowerRanks])
    .then(
        axios.spread((...responses) => {

        const requestProfile = responses.data.data[0];
        const requestMatch= responses.data.data[1];
        const requestChallenges= responses.data.data[2];
        const requestPowerRanks= responses.data.data[3];
        // use/access the results
        console.log(requestProfile, requestMatch, requestChallenges, requestPowerRanks);
         }
         );
        )
        .catch(errors => {
        console.error(errors);
        });

        export {requestProfile, requestMatch, requestChallenges, requestPowerRanks}






