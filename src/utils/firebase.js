import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDGRhzBPCK6j-EN0ZEQPdQw0v2VDl-vgE",
  authDomain: "muqeet-mughal-portfolio.firebaseapp.com",
  projectId: "muqeet-mughal-portfolio",
  storageBucket: "muqeet-mughal-portfolio.appspot.com",
  messagingSenderId: "983726528198",
  appId: "1:983726528198:web:df5ae7c164886f38bf69c7",
  measurementId: "G-4L99D8EHMS",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

const perf = getPerformance(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { db, auth, storage, provider, perf, analytics };
