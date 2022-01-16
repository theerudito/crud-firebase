
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
  import {getFirestore,collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtUB6_YfZYwEs4V9zAGa323F9MreR9d4U",
    authDomain: "fir-crud-js-d4000.firebaseapp.com",
    projectId: "fir-crud-js-d4000",
    storageBucket: "fir-crud-js-d4000.appspot.com",
    messagingSenderId: "139573368345",
    appId: "1:139573368345:web:233e657a56fc4d89817c88",
    measurementId: "G-CCFMJ8KGZY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore()

  export const saveTask = (title, description) => {
     addDoc(collection(db, "task"), {title, description})
  }


  export const getTask = () => getDocs(collection(db, "task"))

  export const onGetTask = () => console.log("nad")

  export {
    onSnapshot,
    collection,
    db
  }

  export const eliminarTarea = id => deleteDoc(doc(db, "task", id))

  export const obtenerTarea = id => getDoc(doc(db, "task", id))

  export const actualizarTarea = (id, nuevosDatos) => updateDoc(doc(db, "task", id), nuevosDatos)