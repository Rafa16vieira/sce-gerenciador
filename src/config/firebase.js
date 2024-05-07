import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1wqCwrg2sC7Db4XtFxiq3fElUYhm4EHY",
  authDomain: "cesmac-ws.firebaseapp.com",
  databaseURL: "https://cesmac-ws.firebaseio.com",
  projectId: "cesmac-ws",
  storageBucket: "cesmac-ws.appspot.com",
  messagingSenderId: "779438039625",
  appId: "1:779438039625:web:1857236127d04d252e1598",
  measurementId: "G-L0QCNVGXJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();