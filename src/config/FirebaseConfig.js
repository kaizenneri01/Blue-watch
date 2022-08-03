import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU2_9l-PyQHaigWcXbiO5_UMudezTb9Hc",
  authDomain: "bluewatch-8c512.firebaseapp.com",
  projectId: "bluewatch-8c512",
  storageBucket: "bluewatch-8c512.appspot.com",
  messagingSenderId: "428093701412",
  appId: "1:428093701412:web:2e7e1f83a73367824807b1",
  measurementId: "G-BEYNVK6N6M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { analytics, auth, db };
