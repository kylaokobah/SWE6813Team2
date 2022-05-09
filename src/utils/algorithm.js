import { useContext, useEffect, useState } from "react";
import { query, where } from "firebase/firestore";
import {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize} from '../../mock-utils';
import {winPercentage} from "../utils/calculations.js"

  function algorithm {
  const { id } = useParams()
  const { documents, error } = useCollection('find_match', id)
  const { user } = useAuthContext()
  const[userId, setUserId] = useState<string[]>([]);
  const [epicName, setEpicName] = useState<epicName[]>([]);


      const [kd, setKd] = useState('')
      const [kills, setKills] = useState('')
      const [matchesPlayed, setMatchesPlayed] = useState('')
      const [timePlayed, setTimePlayed] = useState('')
      const [winsTotal, setWinsTotal] = useState('')


//query to find users for competitive players
   export const getUserIdList = async () => {
    const ref = collection(db, "player_profile");
    //comparing user stats
    if (user.winPercentage > 80 && user.gamingGoals == 0 && user.gamingType == 0){
    const findUserRef= collection(db, "users");
    const competitiveStatsQuery = query(findUserRef, where("isOnline", "==", "true"), where("winPercentage", ">", 80 ));
    const snapShot = await getDocs(q);
    return snapShot;
    }



  };