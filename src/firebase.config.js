// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCP42MYTgZUGgdUko8r7jbi5l_KBhwt5Sw",

  authDomain: "food-shop-739.firebaseapp.com",

  projectId: "food-shop-739",

  storageBucket: "food-shop-739.appspot.com",

  messagingSenderId: "714029464167",

  appId: "1:714029464167:web:9f1d06124289ad30c2f2c2",

  measurementId: "G-MXGJLHV6B8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
