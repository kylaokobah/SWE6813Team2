import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import {MATCHDATA} from '../../utils/consts';
import {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize} from '../../mock-utils'
import useCollection from './collection/useCollection';


//const info = await firebase.firestore().collection("user").doc(user.id).collection("player_profile").doc(user.id).get();

export const getAllUsers = async () => {
    try {
      let snapshot = await db.get();
      snapshot = snapshot.docs;
      return snapshot;
    } catch (err) {

    }
  };


export const getUserData = async (player_profile) => {
  const snapshot = await db.doc(user).get();
  if (snapshot.exists) return snapshot.data();
  else throw new Error(`Data for user ${user} does not exist`);
};

export const addLikeUser = async (user, newLike) => {
  try {
    await db.doc(player_profile).update({
      like: firebase.firestore.FieldValue.arrayUnion(newLike)
    });
    return "added Like user";
  } catch (error) {
    console.log(error);
  }
};

export const removeLikeUser = async (user, oldLike) => {
  try {
    await db.doc(player_profile).update({
      like: firebase.firestore.FieldValue.arrayRemove(oldLike)
    });
    return "removed Like user";
  } catch (error) {
    console.log(error);
  }
};


export function MatchService (RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize) {
     const foundMatch = []
 // Get all users
  const users = await firebase.firestore()
    .collection("user")
    .get();
    user.forEach(async user => {
     const info = await firebase.firestore().collection("user").doc(user.id).collection("player_profile").doc(user.id).get();


const foundMatch= {
    gamingGoals.map((gamingGoals, index) =>{
        for (let i=0; i> gamingGoals.length; i++ ){
        for let j= 0; j> RandomGamingGoals.length; j++){
           if (gamingGoals.at(index) == RandomGamingGoals.at(index)
            return true;
    }
    }
    }
     gamingType.map((gamingType, index) =>{
            for (let i=0; i> gamingType.length; i++ ){
            for let j= 0; j> RandomGamingType.length; j++){
               if (gamingType.at(index) == RandomGamingType.at(index)
                return true;
        }
        }
        }
             platform.map((platform, index) =>{
                    for (let i=0; i> platform.length; i++ ){
                    for let j= 0; j> RandomPlatform.length; j++){
                       if (platform.at(index) == RandomPlatform.at(index)
                        return true;
                }
                }
                }
                     teamSize.map((teamSize, index) =>{
                            for (let i=0; i> teamSize.length; i++ ){
                            for let j= 0; j> RandomTeamSize.length; j++){
                               if (teamSize.at(index) == RandomTeamSize.at(index)
                                return true;
                        }
                        }
                        }
                        }







}



/*export const postFeedback = async (profile, requestType, message) =>
  firebase
    .firestore()
    .collection('feedback')
    .add({
      requestType,
      message,
      email: profile.email,
      name: profile.firstname + ' ' + profile.lastname,
      uid: profile.uid,
      username: profile.username,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

export const postContact = async (data) => firebase.functions().httpsCallable('comment-submit')(data);*/
