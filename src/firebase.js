// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBxsqdCEesFExBbtXjtENIGY63OdCeO18",
  authDomain: "netflix-clone-new-df893.firebaseapp.com",
  projectId: "netflix-clone-new-df893",
  storageBucket: "netflix-clone-new-df893.appspot.com",
  messagingSenderId: "97414610170",
  appId: "1:97414610170:web:1a2ffa842b789fda511d43",
  measurementId: "G-LPQF6HNY33"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export the initialized auth and db
export { auth, db };
export default firebaseApp;
