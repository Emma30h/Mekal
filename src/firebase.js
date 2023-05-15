// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhDRUVwjQBtImMj5FVsklc21Yw4Ws-MVs",
  authDomain: "mekal-53bcb.firebaseapp.com",
  projectId: "mekal-53bcb",
  storageBucket: "mekal-53bcb.appspot.com",
  messagingSenderId: "993607714963",
  appId: "1:993607714963:web:6ca2581cc630d02a33a566",
  measurementId: "G-FQH8FKMVQY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Firebase Auth
export const auth = getAuth(app);

//Firebase Firestore
export const db = getFirestore(app)
