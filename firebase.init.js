// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt4W0ON3wNgzc6GenWLZJsr_mJrE8baZQ",
  authDomain: "food-baaz.firebaseapp.com",
  projectId: "food-baaz",
  storageBucket: "food-baaz.appspot.com",
  messagingSenderId: "515873864394",
  appId: "1:515873864394:web:84bfe55f08792f80401233",
  measurementId: "G-GMLZL1RMD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);