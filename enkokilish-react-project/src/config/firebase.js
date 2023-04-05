// Import functions needed 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// my firebase Config 
const firebaseConfig = {
  apiKey: "AIzaSyBfKaX6xswPpwD7Fkc2Ws4t48wnLctTajY",
  authDomain: "enkokilish-9fe30.firebaseapp.com",
  projectId: "enkokilish-9fe30",
  storageBucket: "enkokilish-9fe30.appspot.com",
  messagingSenderId: "356981250671",
  appId: "1:356981250671:web:692187347c46e039c50b9a",
  measurementId: "G-K9TWV7N2CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);