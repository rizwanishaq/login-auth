import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyANB7MdMHncvPaVybUDr_KtW3Lz9FlaV-U",
  authDomain: "user-auth-db631.firebaseapp.com",
  databaseURL: "https://user-auth-db631.firebaseio.com",
  projectId: "user-auth-db631",
  storageBucket: "user-auth-db631.appspot.com",
  messagingSenderId: "770729689512",
  appId: "1:770729689512:web:31b14f0fb77ec7c5375d9d",
});

export const auth = app.auth();
export default app;
