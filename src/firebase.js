import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbxyriCItJNtkE8CCLzbajhxweuDuljng",
  authDomain: "linkedin-clone-yt-80e9a.firebaseapp.com",
  projectId: "linkedin-clone-yt-80e9a",
  storageBucket: "linkedin-clone-yt-80e9a.appspot.com",
  messagingSenderId: "996074154419",
  appId: "1:996074154419:web:953be38dfb11c5d8dd43c6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.getFirestore();
  const auth = firebase.auth();

  export { db , auth };

