// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDErG7dELPZLZHiGb8Gt5AobDRfJYp59DE",
  authDomain: "ownnetflixgpt.firebaseapp.com",
  projectId: "ownnetflixgpt",
  storageBucket: "ownnetflixgpt.firebasestorage.app",
  messagingSenderId: "592375100486",
  appId: "1:592375100486:web:d93e8f03b740ec1bb20647",
  measurementId: "G-4QB1L6W968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);