// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiSfdV2mDKVyiKc22bMqT4RrnDfbBhnos",
  authDomain: "create-react-project-b7f2b.firebaseapp.com",
  projectId: "create-react-project-b7f2b",
  storageBucket: "create-react-project-b7f2b.firebasestorage.app",
  messagingSenderId: "640902895032",
  appId: "1:640902895032:web:0b8cd08f14c33477beab4d",
  measurementId: "G-BZ2136RDTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 
export const db=getFirestore(app)