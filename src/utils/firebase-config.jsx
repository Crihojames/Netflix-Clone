// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyArWnANwhNErkQlmcuWyK5NINxnRiBYBy0",
  authDomain: "netflix-project-fa1c8.firebaseapp.com",
  projectId: "netflix-project-fa1c8",
  storageBucket: "netflix-project-fa1c8.appspot.com",
  messagingSenderId: "855219747655",
  appId: "1:855219747655:web:826054a95f47cf33316a62",
  measurementId: "G-XFFN4F89YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);