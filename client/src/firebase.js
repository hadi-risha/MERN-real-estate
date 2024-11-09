// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-2382f.firebaseapp.com",
  projectId: "mern-real-estate-2382f",
  storageBucket: "mern-real-estate-2382f.firebasestorage.app",
  messagingSenderId: "434457141178",
  appId: "1:434457141178:web:1d380933dba8099bd84783"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);