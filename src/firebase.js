import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu_wRmx8x5fq82KZd-QBSKkCcXXXyVQEE",
  authDomain: "ehub-83253.firebaseapp.com",
  projectId: "ehub-83253",
  storageBucket: "ehub-83253.appspot.com",
  messagingSenderId: "466119034449",
  appId: "1:466119034449:web:703c4da64ca9f04f92da70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };