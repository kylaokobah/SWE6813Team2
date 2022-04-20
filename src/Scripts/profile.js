/*const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get('/', async(req, res) => {

    const{platform,region,epic} = req.query;
   
    try {

        const headers = {
            "TRN-Api-Key:": process.env.TRN_API_KEY
        }

        const response = await fetch('${process.env.TRACKER_API_URI}/${platform}/${region}/${epic}', headers);

        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            data.status = false;
            return res.status(404).json({
                msg: '${epic} and ${region} not found',
            });
        }

        data.status = true;
        res.status(200).json(data);
    } catch (error) {
        
        res.status(500).json({
            msg: "Server Error",
        });        
    }
});

module.exports = router;*/
