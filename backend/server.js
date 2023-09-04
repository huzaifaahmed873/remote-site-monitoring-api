// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9RWfWFLOgkTQqE6rpAED4ScuPbvGmcD0",
    authDomain: "t-lyari.firebaseapp.com",
    databaseURL: "https://t-lyari-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "t-lyari",
    storageBucket: "t-lyari.appspot.com",
    messagingSenderId: "777277609642",
    appId: "1:777277609642:web:0cadefe195c66ae81fa2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const starCountRef = ref(db, '/FLOW_RATE_2/FIT102');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log('data', data);
});