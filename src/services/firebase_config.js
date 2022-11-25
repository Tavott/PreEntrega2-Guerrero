// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBviHZl9ZfCX1e9___bmYYvJMlnocxlRNw",
    authDomain: "e-comerce-pf.firebaseapp.com",
    projectId: "e-comerce-pf",
    storageBucket: "e-comerce-pf.appspot.com",
    messagingSenderId: "789741933764",
    appId: "1:789741933764:web:648a717aa442501be1e591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);