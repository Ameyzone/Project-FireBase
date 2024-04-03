// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LSCxiY6kGgcHeDDGaPbFTzMAGxxKs0Y",
  authDomain: "image-collection-68ff2.firebaseapp.com",
  projectId: "image-collection-68ff2",
  storageBucket: "image-collection-68ff2.appspot.com",
  messagingSenderId: "175126421283",
  appId: "1:175126421283:web:ccd72fde581f6d07ed7696"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth , storage, db}