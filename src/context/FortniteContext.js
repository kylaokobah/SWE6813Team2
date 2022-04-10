 import React, { useEffect, useState, createContext } from "react";
 import GetFortniteValues from '../api/GetFortniteValues';

export const FortniteContext = createContext()

 export const FortniteContextProvider = ({ props }) => {
 //attempting to call the fortnite tracker API lol
    const [areAllValuesReady, setAreAllValuesReady] = useState(false);
    const [uniqueActiveValues, setUniqueActiveValues] = useState();
    const [activeValues, setActiveValues] = useState([]);
    const [isFortniteLoading, setIsFortniteLoading] = useState(true);
    const [isFortnitePlayerFound, setIsFortnitePlayerFound] = useState(null);
    const [fortniteValues, setFortniteValues] = useState({});
    const [activeCards, setActiveCards] = useState([]);
    const inputValue = props.location.state;
    const fortniteInputs = inputValue;
    const {
        username: fortnite_username,
        platform: fortnite_platform,
      } = fortniteInputs;

     useEffect(() => {
         for (let i in inputValue) {
           if (inputValue[i].username) {
             setActiveCards((prev) => {
               return [...prev, i].sort();
             });
           }
         }
       }, [inputValue]);

         useEffect(() => {
           for (let i in inputValue) {
             if (inputValue[i].username) {
               setActiveValues((prev) => {
                 return [
                   ...prev,
                   {
                     value: i,
                     isPlayerFound: (() => {
                       if (i.includes("fortnite"))
                         return isFortnitePlayerFound;
                     })(),
                   },
                 ];
               });
             }
           }
         }, [
           inputValue,
           isFortnitePlayerFound,
         ]);

         useEffect(() => {
             function getUniqueArray(arr = [], compareProps = []) {
               let modifiedArray = [];
               if (compareProps.length === 0 && arr.length > 0)
                 compareProps.push(...Object.keys(arr[0]));
               arr.map((item) => {
                 if (modifiedArray.length === 0) {
                   return modifiedArray.push(item);
                 } else {
                   if (
                     !modifiedArray.some((item2) =>
                       compareProps.every(
                         (eachProps) => item2[eachProps] === item[eachProps]
                       )
                     )
                   ) {
                     return modifiedArray.push(item);
                   }
                 }
               });
               return modifiedArray.sort(compare);
             }
             function compare(a, b) {
               const bandA = a.value.toUpperCase();
               const bandB = b.value.toUpperCase();

               let comparison = 0;
               if (bandA > bandB) {
                 comparison = 1;
               } else if (bandA < bandB) {
                 comparison = -1;
               }
               return comparison;
             }
             const filteredActiveValues = activeValues.filter(
               (el) => el.isPlayerFound !== null
             );

             setUniqueActiveValues(getUniqueArray(filteredActiveValues));
           }, [activeValues]);

        useEffect(() => {
           if (!fortnite_username) {
             setIsFortniteLoading(false);
             return;
           }

           GetFortniteValues(
             fortnite_username,
             fortnite_platform,
             setFortniteValues,
             setIsFortniteLoading,
             setIsFortnitePlayerFound
           );
         }, [fortnite_platform, fortnite_username]);

         const context_values = {
             fortniteValues,
             areAllValuesReady,
             uniqueActiveValues,
             activeValues,
             activeCards,
             fortnite_platform,
             fortnite_username
           };

            return (
               <FortniteContext.Provider value={context_values }>
                 {{...props} }
               </FortniteContext.Provider>
             )
             }