import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBSGxVUY_696Lqim1kxArw5T3eESx-Jxc0",
    authDomain: "testprojected-23441.firebaseapp.com",
    projectId: "testprojected-23441",
    storageBucket: "testprojected-23441.appspot.com",
    messagingSenderId: "771190682115",
    appId: "1:771190682115:web:81ae1297c6484edcd9d436"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };