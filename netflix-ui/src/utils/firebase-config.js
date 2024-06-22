
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2RGSXwsrO-LK5CGnXw9DsLqFkDRYBuEw",
  authDomain: "netflix-clone-33ac4.firebaseapp.com",
  projectId: "netflix-clone-33ac4",
  storageBucket: "netflix-clone-33ac4.appspot.com",
  messagingSenderId: "303060894136",
  appId: "1:303060894136:web:0fb7587fe2ba12c9bb4f4d",
  measurementId: "G-L4HLEYRM2D"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);