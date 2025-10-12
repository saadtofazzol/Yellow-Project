// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCmdvcdm3_0ukB5FsaT0trVhvy0cvM0ZVE",
  authDomain: "yellow-project-ccabb.firebaseapp.com",
  projectId: "yellow-project-ccabb",
  storageBucket: "yellow-project-ccabb.firebasestorage.app",
  messagingSenderId: "208565927751",
  appId: "1:208565927751:web:71d6237d9ddcf1eda11662",
  measurementId: "G-724BPNCP2C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)