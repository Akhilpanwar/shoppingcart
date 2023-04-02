// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukgEVbGZ9OYu0TO8nmJQQjVxVYypJsQY",
  authDomain: "cart-42c6b.firebaseapp.com",
  projectId: "cart-42c6b",
  storageBucket: "cart-42c6b.appspot.com",
  messagingSenderId: "459624266163",
  appId: "1:459624266163:web:9a873fa0c3579fe29db3c6",
  measurementId: "G-6E2R6WP8YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
