import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCup_IGBctDV89sKXdUNz8ZmwlcU5t_6K0",
  authDomain: "logindb-8f1c1.firebaseapp.com",
  databaseURL: "https://logindb-8f1c1-default-rtdb.firebaseio.com",
  projectId: "logindb-8f1c1",
  storageBucket: "logindb-8f1c1.firebasestorage.app",
  messagingSenderId: "1010004730406",
  appId: "1:1010004730406:web:ebece8344062bf6a58bce7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);