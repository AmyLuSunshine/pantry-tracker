// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpMlspl5d8CRGFq1v1g8QyetYGIOjZVo",
  authDomain: "pantry-tracker-ab1b5.firebaseapp.com",
  projectId: "pantry-tracker-ab1b5",
  storageBucket: "pantry-tracker-ab1b5.appspot.com",
  messagingSenderId: "275541244450",
  appId: "1:275541244450:web:98cee71df27c44974e287b",
  measurementId: "G-RHPX61C52P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };