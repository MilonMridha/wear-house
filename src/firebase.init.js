// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGx8KnkObnuSm-P-hddNHTTEaauVYpn64",
  authDomain: "perfume-wear-house.firebaseapp.com",
  projectId: "perfume-wear-house",
  storageBucket: "perfume-wear-house.appspot.com",
  messagingSenderId: "767802881075",
  appId: "1:767802881075:web:2b5db936a6b2387d341f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
