/* eslint-disable prefer-destructuring */
/*
Some Notes:

This code assumes you are running firebase v9.x, using v8.x compat
if you are running firebase v8.x or below, remove the /compat portion
of the imports.

If you are not using ESLint, or do not have 'prefer-destructuring' enabled,
you can remove the comment above this block comment.

You will need to add two dependencies to your project to use this script:

Yarn:
  yarn add lorem-ipsum random-profile-generator

NPM:
  npm install --save lorem-ipsum random-profile-generator

Finally, you will have to adapt the script a bit to work for your needs.
This will entail updating the arrays with whatever data you need, and
implementing this as a page on your site. If you are using React, you can
probably just add it in to your router and drop it in your page directory.

I will try to comment it all clearly, so you know what/where to change things.
*/

// Imports: Adjust as necessary to implement the page on your site.
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { LoremIpsum } from 'lorem-ipsum';
import {useLogin} from './useLogin';
import {useSignup} from "./useSignup"

// This line is also an import.
//const randomProfile = require('random-profile-generator');

// The arrays from which data is generated locally. Update/add/delete as needed, any length is fine.
// Not everything is generated here. Some attributes come from other apis.
// (I tried to select standardized/popular lists where possible.)
const knownPlatforms = ['PSN', 'PC', 'Xbox'];
const languageUsed= ['English', 'Spanish', 'French','Japanese', 'Chinese', 'Other'];
const matchesPlayed = ['1-100'];
const matchesWon = ['Some High-school', 'Graduated High-school', 'Some College', 'Undergraduate Degree',
  'Post-Graduate Degree'];
const religions = ['Christianity', 'Judiasm', 'Islam', 'Buddhism', 'Agnostic', 'Spiritual Non-Religious', 'Other'];
const ambitions = ['Somewhat Ambitious', 'Moderately Ambitious', 'Highly Ambitious'];
const alchoholUses = ['Rarely', 'Socially/On Occasion', 'Moderate Drinker', 'Heavy Drinker'];
const smokingStatuses = ['Smoker', 'Non-Smoker', 'Former Smoker', 'Quitting', 'Want to Quit'];
const childStatuses = ['Have Kids', 'Want Kids', 'Maybe Someday', 'Definitely Not'];
const astroSigns = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',
  'Scorpio', 'Sagittarius'];
const hairColors = ['Black', 'Brown', 'Auburn', 'Red', 'Blond', 'Gray', 'Other'];
const ethnicities = ['American Indian/Alaska Native', 'Asian', 'Black/African American', 'Hispanic/Latino',
  'Hawaiian Native/Pacific Islander', 'White', 'Other'];

// These are the variables that store the generated attributes. You must include
// a variable for each type of attribute you want to generate.
let attribArray;
let gDob;
let gName;
let gGender;
let gUrl;
let gEmail;
let gPw;
let gOutActivs;
let gEthnicity;
let gEyeColor;
let gHairColor;
let gBodyType;
let gHeight;
let gEducation;
let gReligion;
let gAmbition;
let gAlcohol;
let gSmoking;
let gChild;
let gAstro;
let gDescription;

// A function to select a string at random from an array
const randomString = (array) => array[Math.floor(Math.random() * array.length)];

// A function to get a random date between two dates (used by generateRandomDOB)
function getRandomDate(date1, date2) {
  const fromTime = date1.getTime();
  const toTime = date2.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

// Generate a random height in inches; currently a range between 65" and 75"
// (or 74, not sure about decimal handling in js)
const generateHeightInches = () => (Math.round((Math.random() * 10) + 65));

// Generate a random birthday within a range. Manually edit the range as needed.
const generateRandomDOB = () => {
  const random = getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2001-02-12T01:57:45.271Z'));
  return random.toISOString().split('T')[0];
};

// Create an array of 5 random selections from another array.
// Caution: This does not prevent duplicates!!
function genOutdoorActArray() {
  return [randomString(outdoorActList), randomString(outdoorActList),
    randomString(outdoorActList), randomString(outdoorActList), randomString(outdoorActList)];
}

// Use random-profile-generator to get some of the more difficult to generate attributes.
// For now they are held in the array 'profile'.
function genProfileArray() {
  const profile = randomProfile.profile();
  return [profile.fullName, profile.gender, profile.avatar,
    profile.email, profile.lastName + profile.age];
}

// Configure amount of generated lorem-ipsum text for profile description.
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// Main function to generate a user
function generateUserDetails() {
  // First, the variables declared earlier are updated with generated attributes.
  // We store what returns from the function that calls generate-random-profile in
  // an array and immediately use it:
  attribArray = genProfileArray();
  gName = attribArray[0]; // name
  gGender = attribArray[1]; // gender
  gEmail = attribArray[3];
  gPw = attribArray[4];

  // Use the pravatar api to get a persistent profile image url based on generated email:
  gUrl = `https://i.pravatar.cc/300?u=${gEmail}`;

  // Update attributes from misc functions:
  gDob = generateRandomDOB();
  gDescription = lorem.generateSentences(3);
  gOutActivs = genOutdoorActArray();
  gEthnicity = randomString(ethnicities);
  gEyeColor = randomString(eyeColors);
  gHairColor = randomString(hairColors);
  gBodyType = randomString(bodyTypes);
  gHeight = generateHeightInches();
  gEducation = randomString(educations);
  gReligion = randomString(religions);
  gAmbition = randomString(ambitions);
  gAlcohol = randomString(alchoholUses);
  gSmoking = randomString(smokingStatuses);
  gChild = randomString(childStatuses);
  gAstro = randomString(astroSigns);
  // At the end of this func, a complete user is now generated and ready to be registered
}

// Page main function
const GenerateUserPage = () => {
  const [error, setError] = useState('');

  const registerUser = () => {
    // Here we call the generation function; after this, we can use our variables defined above.
    generateUserDetails();

    // Here we register the user with all the generated attributes.
    firebase
      .auth()
      .createUserWithEmailAndPassword(gEmail, gPw)
      .then(async (doc) => {
        const { uid } = doc.user;

        // The names on the LEFT are the db attribute names, the var on the right are the values
        await firebase.firestore().collection('users').doc(uid).set({
          name: gName,
          description: gDescription,
          imageUrl: gUrl,
          likes: [], // Note we don't have to define values here
          dislikes: [], // We can also include empty non-arrays like so: dislikes: ''
          favorites: [],
          matches: [],
          birthdate: gDob,
          height: gHeight,
          gender: gGender,
          ethnicity: gEthnicity,
          outdoorActivities: gOutActivs,
          eyeColor: gEyeColor,
          hairColor: gHairColor,
          bodyType: gBodyType,
          education: gEducation,
          religion: gReligion,
          ambition: gAmbition,
          alcoholUse: gAlcohol,
          smoking: gSmoking,
          childStatus: gChild,
          astrologySign: gAstro,
          id: uid,
        });

        // This is how we handed registration off to our chat system.
        // await registerCometChatUser(gName, uid);
        // await loginCometChatUser(uid);

        // Here you can log whatever you need to about the user that was just created.
        // You can add more console.log calls or just update the one below this line.
        console.log(`User [${gName}:${gEmail}] created successfully.`);
      })
      // In event of failure, try to catch and display the error message thrown
      .catch((err) => {
        setError(err.message);
        console.log(`Unable to register user: ${err.message}`);
      });
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
