// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiQCXO7aPk85GYrV_PtdHhBXVjrNmu5Io",
  authDomain: "mern-realestate-7408c.firebaseapp.com",
  projectId: "mern-realestate-7408c",
  storageBucket: "mern-realestate-7408c.appspot.com",
  messagingSenderId: "337365796725",
  appId: "1:337365796725:web:e42dc5a1a87b0db0e5f53c",
  measurementId: "G-YB2GV7T7E4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
