import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvu3iMi2vjNP-x6DYtter0HBd4mQDEFyk",
  authDomain: "blog-8ac6e.firebaseapp.com",
  projectId: "blog-8ac6e",
  storageBucket: "blog-8ac6e.appspot.com",
  messagingSenderId: "594689653153",
  appId: "1:594689653153:web:2ab2ceab6c2993b582b3e0",
  measurementId: "G-GRF1CLS45Y"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app)
export const provider= new GoogleAuthProvider()
export const db=getFirestore(app)