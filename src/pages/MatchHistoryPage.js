import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ItemCard from "../components/Card/ItemCard";
import NavBar from "../components/Nav/NavBar";


const MatchHistoryPage = () => {
  const [infos, setInfos] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const [itemPerPage] = useState(16);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const indexOfLastItem = currentItem * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = infos.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    let response = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    let data = await response.json();
    console.log(data.data);
    setInfos(data.data);
    setLoading(true);
  }
  return (
    <div className="h-screen overflow-y-scroll bg-black text-white overflow-hidden">
      <NavBar />

      <div className="flex justify-center items-center flex-col space-y-7">
        <h1 className="text-3xl lg:text-6xl md:text-5xl font-bold mt-[50px] px-5">
          Upcoming Item's
        </h1>

        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search For Previous Matches"
          className="bg-gradient-to-r from-purple-700 via-purple-400 to-pink-500 placeholder-white
          text-white font-semibold text-lg p-5 rounded-md outline-none w-half lg:w-1/5"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-[50px] ">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {infos
              .filter((info) => {
                if (search == "") {
                  return info;
                } else if (
                  info.item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return info;
                }
              })

              .map((info) => (
                <ItemCard
                  key={info.itemId}
                  name={info.item.name}
                  image={info.item.images.icon}
                  rarity={info.item.rarity}
                  type={info.item.type}
                  vbucks={"???"}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-3">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default MatchHistoryPage;