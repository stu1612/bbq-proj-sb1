// npm
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// files
import { storage } from "../firebase/firebase";

export default function useStorage(path) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  async function uploadFile(file) {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          return url;
        });
      }
    );
  }

  return { uploadFile, progress, error };
}
