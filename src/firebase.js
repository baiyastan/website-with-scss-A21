// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9DFHdhxYCPne-9vth3Dh6obaU1wvcyGQ",
  authDomain: "login-register-a-21-b2858.firebaseapp.com",
  projectId: "login-register-a-21-b2858",
  storageBucket: "login-register-a-21-b2858.appspot.com",
  messagingSenderId: "1043152919984",
  appId: "1:1043152919984:web:8ae27950b6dfdea4010a75",
  measurementId: "G-BXE9SL78ZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
