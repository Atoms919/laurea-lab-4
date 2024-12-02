import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (keep this as it is)
const firebaseConfig = {
  apiKey: "AIzaSyBabqXNLNyaUEXjXyC_saisoKTPV9WyM5c",
  authDomain: "glimpse-aaff8.firebaseapp.com",
  projectId: "glimpse-aaff8",
  storageBucket: "glimpse-aaff8.firebasestorage.app",
  messagingSenderId: "535596067328",
  appId: "1:535596067328:web:f110a4cf1ca679e02586e5",
  measurementId: "G-XCW88RN2MQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app); // For Firebase Authentication
export const db = getFirestore(app); // For Firestore