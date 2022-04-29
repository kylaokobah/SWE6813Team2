import { useContext, useEffect, useState } from "react";
import { query, where } from "firebase/firestore";
import {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize} from '../../mock-utils';
import {winPercentage} from "../utils/calculations.js"

export default function FindMatchPage {
  const { id } = useParams()
  const { documents, error } = useCollection('find_match', id)
  const { user } = useAuthContext()
  const[userId, setUserId] = useState<string[]>([]);
  const [epicName, setEpicName] = useState<epicName[]>([]);

//query to find users for competitive players
 const getUserIdList = async () => {
    const ref = collection(db, "player_profile");
    //querying all online users to find a match
    const competitiveStatsQuery = query(ref, where("isOnline", "==", "true"), where("winPercentage", ">", 80 ));
    const snapShot = await getDocs(q);

  };


// Page Content - You may need to delete out some CSS (stuff in className) if you get errors
  // I tried fo remove the parts that explicitly referenced resources which you might not have
  // such as icons, etc.
  return (
    <div className="my-10 bg-white rounded-2xl border-2 border-gray-200 flex flex-col justify-center items-center mx-auto p-10 w-full md:w-7/12">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-extrabold italic uppercase my-4">
          Auto Generated User Registration
          <br />
          Click to Generate and Register
        </h3>
        Open console to verify that user generation is successful! (Press F12)
      </div>
      <div className="text-center w-full divide-y-2 divide-gray-100 divide-solid">
        <form className="my-5 w-full" onSubmit={registerUser}>
          <button
            type="button"
            onClick={registerUser}
            className="w-full bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full hover:bg-gray-200 py-4 px-16 block whitespace-no-wrap text-white font-bold uppercase"
          >
            Register Generated User
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateUserPage;