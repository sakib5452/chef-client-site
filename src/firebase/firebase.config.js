// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSW2y7Axs9b-cfESpiDboZJ9bwakHibnk",
    authDomain: "chef-auth-a4eea.firebaseapp.com",
    projectId: "chef-auth-a4eea",
    storageBucket: "chef-auth-a4eea.appspot.com",
    messagingSenderId: "130712573935",
    appId: "1:130712573935:web:ad171c1c7d4af784b5481a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;