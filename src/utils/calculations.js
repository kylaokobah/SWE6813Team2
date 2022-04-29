import React, { useState } from "react";
import {winsTotal, matchesPlayed} from "../mock-utils/MockStats"

export default function WinPercentage(){
 const [winsTotal, setWinsTotal] = useState(0);
 const [matchesPlayed, setMatchesPlayed] = useState(0);
 const [percentage, setPercentage] = useState(0);

const winPercentage = (e) => {
    e.preventDefault();
    const formValid = +winsTotal >= 0 && +matchesPlayed > 0;
    if (!formValid) {
      return;
    }
        setPercentage((+winsTotal/+matchesPlayed) * 100)
        };

return {winPercentage}



}