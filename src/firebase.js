import {initializeApp} from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDiZqBAHLHclabneyMVLW0xbMvuKNAS4HE",
  authDomain: "linkedin-c15d8.firebaseapp.com",
  projectId: "linkedin-c15d8",
  storageBucket: "linkedin-c15d8.appspot.com",
  messagingSenderId: "1051177232842",
  appId: "1:1051177232842:web:1ece5f2699bcdb9d390733",
  measurementId: "G-4YVRG3PCEJ",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef =collection(db,'userDataRecords')

// const auth = firebase.auth();

export {getDocs,colRef };

// const firebaseConfig = {
//   apiKey: "AIzaSyDbxyriCItJNtkE8CCLzbajhxweuDuljng",
//   authDomain: "linkedin-clone-yt-80e9a.firebaseapp.com",
//   projectId: "linkedin-clone-yt-80e9a",
//   storageBucket: "linkedin-clone-yt-80e9a.appspot.com",
//   messagingSenderId: "996074154419",
//   appId: "1:996074154419:web:953be38dfb11c5d8dd43c6"
// };
