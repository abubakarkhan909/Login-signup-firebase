// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlk14aVaQg9FQMsvUJs8prkiFwyWkeeM",
  authDomain: "loginwith-d9b2b.firebaseapp.com",
  projectId: "loginwith-d9b2b",
  storageBucket: "loginwith-d9b2b.appspot.com",
  messagingSenderId: "900093800427",
  appId: "1:900093800427:web:747e395bd5dc76286c73ae",
  measurementId: "G-FVYCHPBP79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;