// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu_iItLo0oi7fJze1px0gtIT9uJ9kvD1c",
  authDomain: "june-e0ed6.firebaseapp.com",
  projectId: "june-e0ed6",
  storageBucket: "june-e0ed6.appspot.com",
  messagingSenderId: "697429396286",
  appId: "1:697429396286:web:a7a29c77e912985219fa6f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app)

export {app, auth, db};