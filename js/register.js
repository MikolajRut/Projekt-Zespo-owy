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

singUp.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(db, "users/" + user.uid), {
        username: username,
        email: email,
      });

      alert("Stworzono");
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
