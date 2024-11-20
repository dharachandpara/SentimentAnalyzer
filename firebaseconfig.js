import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, get, child, set, onValue } from "firebase/database";

const firebaseConfig = {
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dbRef = ref(getDatabase());
