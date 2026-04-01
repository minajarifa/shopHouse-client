// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj-Im7f4I02jrmo8M6oe1rsMH_ZrPbZEU",
  authDomain: "shopehouse-89fbd.firebaseapp.com",
  projectId: "shopehouse-89fbd",
  storageBucket: "shopehouse-89fbd.firebasestorage.app",
  messagingSenderId: "289590735670",
  appId: "1:289590735670:web:ac20de563dffc556ee3997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)