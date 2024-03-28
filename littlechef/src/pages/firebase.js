// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6t2wtk27Wg1k1e89BtikH70KQvBUCHcc",
  authDomain: "little-chef-be042.firebaseapp.com",
  projectId: "little-chef-be042",
  storageBucket: "little-chef-be042.appspot.com",
  messagingSenderId: "1069564114105",
  appId: "1:1069564114105:web:273497a20948ef46b89768",
  measurementId: "G-H0YJV886Z6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
