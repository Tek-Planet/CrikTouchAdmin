import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCCrBO9FJ1BaxuffHlti4nx1BSH7samikw",

  authDomain: "reactnative-1daa2.firebaseapp.com",

  databaseURL: "https://reactnative-1daa2.firebaseio.com",

  projectId: "reactnative-1daa2",

  storageBucket: "reactnative-1daa2.appspot.com",

  messagingSenderId: "285119966849",

  appId: "1:285119966849:web:0845ce3bc412d85ae42780",

  measurementId: "G-LNB7TSK2FT"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
