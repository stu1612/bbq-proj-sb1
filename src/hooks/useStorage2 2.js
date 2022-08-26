// npm
import { useState, useEffect } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { addDoc } from "firebase/firestore";

// files
import { storage, fireStore } from "../firebase/firebase";
import { collection } from "firebase/firestore";

export default function useStorage(file, path) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  // useEffect(() => {
  //   async function createFile(path) {
  //     const storageRef = ref(storage, file);
  //     await uploadBytes(storageRef, file);
  //     return await getDownloadURL(storageRef);
  //   }
  //   createFile(path);
  // }, [file]);

  useEffect(() => {
    const storageRef = ref(storage, file);
    const collectionRef = collection(fireStore, path);

    const uploadTask = uploadBytesResumable(storageRef);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(percent);
      },
      (err) => setError(err.message),
      () => {
        const url = getDownloadURL(uploadTask.snapshot.ref);
        addDoc(collectionRef, { url });
        setURL(url);
      }
    );
  }, [file, path]);

  // async function uploadFile(file, path) {
  //   const storageRef = ref(storage, path);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(percent);
  //     },
  //     (err) => setError(err.message),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         setURL(url);
  //       });
  //     }
  //   );
  // }
  return { progress, url, error };
}
