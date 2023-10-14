// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzJPBWW3OaNhYQ7KMRgRbOTeP_fSKS2xU",
  authDomain: "coffee-store-de065.firebaseapp.com",
  projectId: "coffee-store-de065",
  storageBucket: "coffee-store-de065.appspot.com",
  messagingSenderId: "905445702058",
  appId: "1:905445702058:web:fbda3484295d8fbedf93d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;