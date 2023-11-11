// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8h6Zoh0WHL6hBZmd1EMoCMyHiXpz5EEc",
  authDomain: "jugueteria-lnm.firebaseapp.com",
  projectId: "jugueteria-lnm",
  storageBucket: "jugueteria-lnm.appspot.com",
  messagingSenderId: "445424078191",
  appId: "1:445424078191:web:e40775c1471302e2942c9a",
  measurementId: "G-HCQYZSQC1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)