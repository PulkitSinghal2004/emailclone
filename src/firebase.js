// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKIkqDbe6kJbmaUjhlTxH41HRjxHBVew",
  authDomain: "email-clone-80c99.firebaseapp.com",
  projectId: "email-clone-80c99",
  storageBucket: "email-clone-80c99.firebasestorage.app",
  messagingSenderId: "741941870023",
  appId: "1:741941870023:web:e2145a5a0afe82821b6de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();