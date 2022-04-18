// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtxqIgt0t6J_gxQHL9vCo9SBbwSC-mzY",
  authDomain: "assignment-10-1dfbf.firebaseapp.com",
  projectId: "assignment-10-1dfbf",
  storageBucket: "assignment-10-1dfbf.appspot.com",
  messagingSenderId: "453577000068",
  appId: "1:453577000068:web:0c5f62a1c116ed66432ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;