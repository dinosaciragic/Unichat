import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAYGKOJvgNMfePlmWXdyPqaDcButVo1_Xo",
    authDomain: "unichat-bdbe4.firebaseapp.com",
    projectId: "unichat-bdbe4",
    storageBucket: "unichat-bdbe4.appspot.com",
    messagingSenderId: "967774571436",
    appId: "1:967774571436:web:d9f414ac0beae56ec5c809",
  })
  .auth();
