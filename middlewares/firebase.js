// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiGF6uyCTZql_LOcZKzJQeh94qv3iY2Co",
  authDomain: "delalatest11.firebaseapp.com",
  projectId: "delalatest11",
  storageBucket: "delalatest11.appspot.com",
  messagingSenderId: "392107720319",
  appId: "1:392107720319:web:c3c87cfbac60bbb537094a",
  measurementId: "G-LBPQ1XVDWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);