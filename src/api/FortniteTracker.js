const API_FT = 'https://api.fortnitetracker.com';
const FT = 'https://fortnitetracker.com/';

const tracker_API_key = "aa227680-b386-4fce-8fed-e6c8107dcfc4";
const profile = (platform, username) => `${API_FT}/v1/profile/${platform}/${username}`;
const matches = (account) => `${API_FT}/v1/profile/account/${account}`;
const season = (season, account) => `${FT}/api/v0/profile/${account}/stats?platform=psn&season=${season}&isCompetitive=false`;

module.exports = {
    profile,
    matches
}














/*import axios from "axios";

export default function GetFortniteValues(
  fortnite_username,
  fortnite_platform,
  setFortniteValues,
  setIsFortniteLoading,
  setIsFortnitePlayerFound
) {
  const proxy_URL = "https://cors-anywhere.herokuapp.com/";
  const tracker_API_key = "1e5bc329-5d20-445d-bce2-0af17ec79dee";

  axios
    .get(
      proxy_URL +
        `https://api.fortnitetracker.com/v1/profile/${fortnite_platform}/${fortnite_username}`,
      {
        headers: {
          "TRN-Api-Key": tracker_API_key,
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      if (res.data.error) {
        setIsFortnitePlayerFound(false);
        setIsFortniteLoading(false);
        return;
      }

      setIsFortnitePlayerFound(true);
      const data = res.data;
      const stats = res.data.lifeTimeStats;
      const recent_match = res.data.recentMatches;

      setFortniteValues((prevState) => {
        return {
          ...prevState,
          profile: {
            name: data.epicUserHandle,
            platform: data.platformNameLong,
            account_id: data.accountId,
          },
          stats: {
            kill_death_ratio: findStat(stats, "K/d"),
            score: findStat(stats, "Score"),
            win_percent: findStat(stats, "Win%"),
            top_3s: findStat(stats, "Top 3s"),
          },
          matches: {
            total: findStat(stats, "Matches Played"),
            win: findStat(stats, "Wins"),
          },
          recent_match:
            recent_match.length === 0
              ? null
              : {
                  win: recent_match[0].top1 === 1 ? true : false,
                  duration: recent_match[0].minutesPlayed,
                  kill: recent_match[0].kills,
                  matchID: recent_match[0].id,
                },
        };
      });
      setIsFortniteLoading(false);
    })
    .catch((err) => {
      if (err.response) {
        setIsFortnitePlayerFound(false);
        setIsFortniteLoading(false);
      }
    });

  function findStat(arr, val) {
    return arr.find((stat) => stat.key === val).value;
  }
}*/
