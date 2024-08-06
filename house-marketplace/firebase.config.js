import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZPtFmCMdGRhJbbR00uBAud7330YVNC8",
  authDomain: "house-marketplace-app-be061.firebaseapp.com",
  projectId: "house-marketplace-app-be061",
  storageBucket: "house-marketplace-app-be061.appspot.com",
  messagingSenderId: "306311868841",
  appId: "1:306311868841:web:c9cbefe091f313ddbdd4b8"
};

initializeApp(firebaseConfig);
export const db = getFirestore()