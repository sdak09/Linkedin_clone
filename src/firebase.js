import {initializeApp} from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbxyriCItJNtkE8CCLzbajhxweuDuljng",
  authDomain: "linkedin-clone-yt-80e9a.firebaseapp.com",
  //databaseURL: "https://linkedin-clone-yt-80e9a-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-yt-80e9a",
  storageBucket: "linkedin-clone-yt-80e9a.appspot.com",
  messagingSenderId: "996074154419",
  appId: "1:996074154419:web:953be38dfb11c5d8dd43c6"
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
