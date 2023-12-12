// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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

// Opcional: Configurar servicios adicionales de Firebase (auth, firestore, etc.)
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);
const storage = getStorage(app,'gs://changarrito-food-delivery.appspot.com');

export {auth, db, storage, app}