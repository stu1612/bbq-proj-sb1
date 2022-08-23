import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHT-PFWLQoiItANGDBlXPgFkvfuy8uKhQ",
  authDomain: "bbq-proj-sb1.firebaseapp.com",
  projectId: "bbq-proj-sb1",
  storageBucket: "bbq-proj-sb1.appspot.com",
  messagingSenderId: "280852265636",
  appId: "1:280852265636:web:ea7015e403693252444431",
};

const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireStore, auth, storage };
