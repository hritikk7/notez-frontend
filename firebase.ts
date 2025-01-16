import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwWy7V1qaQuRAEc0EvDWxsGn_9MUwRVzo",
  authDomain: "notez-99b0b.firebaseapp.com",
  projectId: "notez-99b0b",
  storageBucket: "notez-99b0b.firebasestorage.app",
  messagingSenderId: "776623193019",
  appId: "1:776623193019:web:cd2755cec86910fbfe629e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {app}