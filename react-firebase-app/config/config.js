import React from "react";
import firebase from "firebase";

//Api Detalis
<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js" />;

var config = {
  apiKey: "AIzaSyCndDZ6ZFP8TwvAqO7zJQ29XKLJKHn7Jec",
  authDomain: "instagram-copy-63780.firebaseapp.com",
  databaseURL: "https://instagram-copy-63780.firebaseio.com",
  projectId: "instagram-copy-63780",
  storageBucket: "instagram-copy-63780.appspot.com",
  messagingSenderId: "700786436320"
};

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
