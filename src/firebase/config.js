import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Z9X6RdImz6hfyqec0VtSgGruj0R5Wog",
  authDomain: "leeslagos-961b8.firebaseapp.com",
  projectId: "leeslagos-961b8",
  storageBucket: "leeslagos-961b8.firebasestorage.app",
  messagingSenderId: "13329525112",
  appId: "1:13329525112:web:ab1a3b707cc7ca939bc08d",
};

// Initialize
const app = initializeApp(firebaseConfig);

const authData = getAuth(app);
const fireStore = getFirestore(app);

// Correct: reference a COLLECTION
export { authData, fireStore };
