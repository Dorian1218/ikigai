// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4skOtYFpexl70f6gCG1dwEcl152U9uS4",
  authDomain: "ikigai-6d5d6.firebaseapp.com",
  projectId: "ikigai-6d5d6",
  storageBucket: "ikigai-6d5d6.appspot.com",
  messagingSenderId: "295135381593",
  appId: "1:295135381593:web:b4a3fd2e23f196746fc948",
  measurementId: "G-G9ND7W9502"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth()

export {app, auth}