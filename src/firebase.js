// Import Firebase SDK from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnEOpLFPxRlvEPIVEblRpNt4K-6ObVaNo",
  authDomain: "finlog-exp-tracker.firebaseapp.com",
  projectId: "finlog-exp-tracker",
  storageBucket: "finlog-exp-tracker.firebasestorage.app",
  messagingSenderId: "616932028998",
  appId: "1:616932028998:web:b4c68317131331937ad047"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { firebaseConfig, auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc, collection, addDoc, getDocs, updateDoc };
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
