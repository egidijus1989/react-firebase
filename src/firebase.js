import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuH-D7Ylc3G6gvBf_BIouELZhTWXh4IF4",
  authDomain: "js-timetable-egidijus.firebaseapp.com",
  projectId: "js-timetable-egidijus",
  storageBucket: "js-timetable-egidijus.appspot.com",
  messagingSenderId: "343962966576",
  appId: "1:343962966576:web:371d31c7395c5f07902bf5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
