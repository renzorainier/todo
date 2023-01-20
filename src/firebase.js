// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_soIfP7wS1ryZOViuff21j7a7J47JAFs",
  authDomain: "todo-41d9b.firebaseapp.com",
  projectId: "todo-41d9b",
  storageBucket: "todo-41d9b.appspot.com",
  messagingSenderId: "706341846764",
  appId: "1:706341846764:web:c71e45ecefbc928d60efc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);