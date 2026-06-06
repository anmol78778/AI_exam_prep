// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQnV0LQoN486xcYXwRfafCInUqgRU8h8",
  authDomain: "authai-40278.firebaseapp.com",
  projectId: "authai-40278",
  storageBucket: "authai-40278.firebasestorage.app",
  messagingSenderId: "438813365483",
  appId: "1:438813365483:web:41cada4c909e74f8bc5aae",
  measurementId: "G-CF8NCT950N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}