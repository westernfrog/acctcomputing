// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore,onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAslvKIwGKp9m4YFbC-NZRbmmDXwBOfJmA",
  authDomain: "confrencewebsite.firebaseapp.com",
  projectId: "confrencewebsite",
  storageBucket: "confrencewebsite.appspot.com",
  messagingSenderId: "511860114926",
  appId: "1:511860114926:web:37a6f08da9cfe36906baff",
  measurementId: "G-3WGQSCTL15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };

