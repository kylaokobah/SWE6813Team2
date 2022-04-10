import Image from "next/image";
import React, { useState } from "react";

const ItemCard = ({ name, image, rarity, vbucks, type }) => {
  const value = rarity;
  let color = "";

  switch (value) {
    case "epic":
      color = "bg-purple-800";
      break;
    case "rare":
      color = "bg-blue-500";
      break;
    case "legendary":
      color = "bg-orange-400";
      break;
    case "common":
      color = "bg-gray-500";
      break;
    case "uncommon":
      color = "bg-green-600";
      break;
    default:
      color = "bg-gray-800";
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className={`${color} p-3 rounded-md flex justify-center flex-col items-center cursor-pointer
      hover:scale-105 
      transition transform duration-300 ease-out
      hover:bg-gray-900 lg:p-5 2xl:p-7`}
    >
      <Image width={200} height={200} src={image} />
      <h2 className="text-white text-2xl font-bold py-2">{name}</h2>
      <h2 className="text-white bg-black text-xl font-bold p-2 rounded-md">
        {capitalizeFirstLetter(type)}
      </h2>
      <h1
        className="
      flex justify-center items-center 
      text-white text-xl font-bold py-2"
      >
        {vbucks}
        <span className="pt-2 pl-2">
          <Image width={50} height={50} src={"/vbuck.png"} />
        </span>
      </h1>
    </div>
  );
};

export default ItemCard;
