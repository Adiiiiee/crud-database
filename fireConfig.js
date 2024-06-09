// fireConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt81g9sJPMdrHA77183z8Rp-0_RV7LmKI",
  authDomain: "crud-f7b8a.firebaseapp.com",
  projectId: "crud-f7b8a",
  storageBucket: "crud-f7b8a.appspot.com",
  messagingSenderId: "113766002813",
  appId: "1:113766002813:web:8ffe2c3ef176ba39f5c114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
