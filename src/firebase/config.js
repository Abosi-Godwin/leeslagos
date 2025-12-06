// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Z9X6RdImz6hfyqec0VtSgGruj0R5Wog",
  authDomain: "leeslagos-961b8.firebaseapp.com",
  projectId: "leeslagos-961b8",
  storageBucket: "leeslagos-961b8.firebasestorage.app",
  messagingSenderId: "13329525112",
  appId: "1:13329525112:web:ab1a3b707cc7ca939bc08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authData = getAuth(app)