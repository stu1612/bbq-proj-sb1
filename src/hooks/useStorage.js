// npm
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc } from "firebase/firestore";

// files
import { storage, fireStore } from "../firebase/firebase";
import { collection } from "firebase/firestore";

export default function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  //   useEffect(() => {
  //     const storageRef = ref(storage, file);
  //     const collectionRef = collection(fireStore, "images");

  //     const uploadTask = uploadBytesResumable(storageRef);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const percent = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         setProgress(percent);
  //       },
  //       (err) => setError(err.message),
  //       () => {
  //         const url = getDownloadURL(uploadTask.snapshot.ref);
  //         addDoc(collectionRef, { url });
  //         setURL(url);
  //       }
  //     );
  //   }, [file]);

  //   async function uploadFile(file) {
  //     const storageRef = ref(storage, path);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const percent = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         setProgress(percent);
  //       },
  //       (err) => setError(err.message),
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //           setURL(url)
  //         });
  //       }
  //     );
  //   }

  return { progress, url, error };
}
