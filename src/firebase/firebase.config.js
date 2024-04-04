// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwS6Pe_04hv9gG67cnfmx-QVDIUH7GnMQ",
  authDomain: "react-dragon-news-auth-a3ca8.firebaseapp.com",
  projectId: "react-dragon-news-auth-a3ca8",
  storageBucket: "react-dragon-news-auth-a3ca8.appspot.com",
  messagingSenderId: "275894278744",
  appId: "1:275894278744:web:8e4db51be278d57e1f082d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth