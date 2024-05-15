// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "hachiblog-f1838.firebaseapp.com",
  projectId: "hachiblog-f1838",
  storageBucket: "hachiblog-f1838.appspot.com",
  messagingSenderId: "492862879181",
  appId: "1:492862879181:web:b57d9a8f29125137294084",
  measurementId: "G-3KFQNMY8QW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);