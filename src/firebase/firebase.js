// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb4sxLE_mmT_FJxeOk-LR69MEhYGWzo2k",
  authDomain: "publicaciones-e7581.firebaseapp.com",
  projectId: "publicaciones-e7581",
  storageBucket: "publicaciones-e7581.appspot.com",
  messagingSenderId: "993791789383",
  appId: "1:993791789383:web:ad4e031df5aaac17d56462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

//Subir publicaciones
const id = v4();

export const uploadPublication = async (data) => {
  const storageRef = ref(storage, "publication/" + id);
  await uploadBytes(storageRef, data);
  const url = await getDownloadURL(storageRef);
  return url;
};

//para subir todo el contenido a firestore
export const db = getFirestore();

export const uploadInfo = async (data) => {
  await addDoc(collection(db, "publications"), data);
};
