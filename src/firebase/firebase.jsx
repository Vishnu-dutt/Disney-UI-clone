// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQlaMfkOVJHzChCulvqq-ZNg0gjW7qgA",
  authDomain: "disneyplusclone-8293c.firebaseapp.com",
  projectId: "disneyplusclone-8293c",
  storageBucket: "disneyplusclone-8293c.appspot.com", // Fixed typo in storage bucket
  messagingSenderId: "239847086507",
  appId: "1:239847086507:web:4da9c38c9a24ace1d89aee",
  measurementId: "G-TEWYKF0Z1L",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Export required Firebase services
export { auth, provider, storage };
export default db;
