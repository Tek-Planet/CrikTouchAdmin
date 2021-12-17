import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // databaseURL: "https://reactnative-1daa2.firebaseio.com",

  apiKey: "AIzaSyBN0DO3iBb9IslZ0Ol9d-SwOuXz0WkHceM",
  authDomain: "crik-touch.firebaseapp.com",
  projectId: "crik-touch",
  storageBucket: "crik-touch.appspot.com",
  messagingSenderId: "989035743504",
  appId: "1:989035743504:web:a22589bbdbaa87cbe6fd95",
  measurementId: "G-Q6LHJL3F40"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
