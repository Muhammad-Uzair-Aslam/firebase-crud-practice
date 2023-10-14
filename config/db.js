// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9gGLMS-QEYTqwrSRgZamNVz-8QUrYM_o",
  authDomain: "practice-firebase-ecd4e.firebaseapp.com",
  projectId: "practice-firebase-ecd4e",
  storageBucket: "practice-firebase-ecd4e.appspot.com",
  messagingSenderId: "469928589782",
  appId: "1:469928589782:web:154b9c077ab0789fcb0c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
