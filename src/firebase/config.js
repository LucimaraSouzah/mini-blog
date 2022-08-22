import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJkLh_Guex9Ji36vOnoMiWbcprQwb9-N8",
  authDomain: "mini-blog-wreact.firebaseapp.com",
  projectId: "mini-blog-wreact",
  storageBucket: "mini-blog-wreact.appspot.com",
  messagingSenderId: "650009840314",
  appId: "1:650009840314:web:2dec062b7367131654d083",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}