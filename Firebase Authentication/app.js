import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7LVVMvpm1OekA047VzNv7vQzOR65gPjg",
  authDomain: "my-1st-project-abc.firebaseapp.com",
  projectId: "my-1st-project-abc",
  storageBucket: "my-1st-project-abc.appspot.com",
  messagingSenderId: "929502981945",
  appId: "1:929502981945:web:1099bddbf990510871c2e8",
  measurementId: "G-JZ1RH5X2T8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// console.log("app =>", app);
// console.log("auth =>", auth);

const SignUpEmail = document.getElementById("SignUpEmail")
const SignUpPassword = document.getElementById("SignUpPassword")
const SignUpButton = document.getElementById("SignUpButton")

const SignInEmail = document.getElementById("SignInEmail")
const SignInPassword = document.getElementById("SignInPassword")
const SignInButton = document.getElementById("SignInButton")

const authContainer = document.getElementById("authContainer")
const content = document.getElementById("content")

const userEmail = document.getElementById("userEmail")
const logOutButton = document.getElementById("logOutButton")

SignUpButton.addEventListener("click", createUserAccount)
SignInButton.addEventListener("click", SignIn)
logOutButton.addEventListener("click", logOut)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in");
    authContainer.style.display = "none"
    content.style.display = "block"
    userEmail.innerText = user.email;
    const uid = user.uid;
  } else {
    console.log("User is not logged in");
    authContainer.style.display = "block"
    content.style.display = "none"
  }
});

function createUserAccount() {
  createUserWithEmailAndPassword(auth, SignUpEmail.value, SignUpPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("SignUp User => ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function SignIn() {
  signInWithEmailAndPassword(auth, SignInEmail.value, SignInPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("SignIn User => ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function logOut() {
  signOut(auth).then(() => {
  }).catch((error) => {
  });
}