// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzKOkjEZO2-7nhDWSqvIcyA4-tOlwE1KE",
  authDomain: "netflixapp-b162a.firebaseapp.com",
  projectId: "netflixapp-b162a",
  storageBucket: "netflixapp-b162a.appspot.com",
  messagingSenderId: "88372485647",
  appId: "1:88372485647:web:6357561760a0e16bb94d7a",
  measurementId: "G-J31D99YWV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();