import firebase from "@firebase/app";
import "@firebase/firestore";
/*
authDomain: "pizzaadev.firebaseapp.com",
projectId: "pizzaadev",
storageBucket: "pizzaadev.appspot.com",
messagingSenderId: "831810510712",
appId: "1:831810510712:web:ef674b79330674d494f28d"
*/
var firebaseConfig = {
  apiKey: "AIzaSyBRsD3U9YvuDk3cSBYozjMntaM3_tOAi1s",
  authDomain: "pizzaadev.firebaseapp.com",
  databaseURL: "https://pizzaadev.firebaseio.com",
  projectId: "pizzaadev",
  storageBucket: "pizzaadev.appspot.com",
  messagingSenderId: "831810510712",
  appId: "1:831810510712:web:ef674b79330674d494f28d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const tasksRef = db.collection("tasks");
