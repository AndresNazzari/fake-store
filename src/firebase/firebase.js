// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqprYxsik7PXdE_vlmQY2gf8Nrjua0b1I",
    authDomain: "fake-store-523a4.firebaseapp.com",
    projectId: "fake-store-523a4",
    storageBucket: "fake-store-523a4.appspot.com",
    messagingSenderId: "840642853056",
    appId: "1:840642853056:web:3dd5183e025d83c4cfd525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)