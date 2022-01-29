import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkrcoa5wKQR08U-5NL0JY9jNmNiSlv_qM",
  authDomain: "pruba1-429cb.firebaseapp.com",
  databaseURL:
    "https://pruba1-429cb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pruba1-429cb",
  storageBucket: "pruba1-429cb.appspot.com",
  messagingSenderId: "800962841380",
  appId: "1:800962841380:web:69bd32afe20f52bfb201b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

login.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const dr = new Date();
      update(ref(db, "users/" + user.uid), {
        last_login: dr,
      });

      alert("Zalogowano");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user zalogowany");
    setupUI(user);
  } else {
    console.log("user niezalogowany");
    setupUI(user);
  }
});

logout.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      alert("Wylogowano");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};
