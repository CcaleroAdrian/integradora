// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs_Omhc50lNszu8Nys9Mzsg3XiTUkYRGc",
  authDomain: "changarrito-food-delivery.firebaseapp.com",
  databaseURL: "https://changarrito-food-delivery-default-rtdb.firebaseio.com",
  projectId: "changarrito-food-delivery",
  storageBucket: "changarrito-food-delivery.appspot.com",
  messagingSenderId: "445118710658",
  appId: "1:445118710658:web:9c91617f3f8eb8b7ff059b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);