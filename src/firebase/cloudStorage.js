// npm
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytes } from "firebase/storage";

// files
import { storage } from "./firebase";

export async function createFile(filePath, file) {
  const fileReference = ref(storage, filePath);

  await uploadBytes(fileReference, file);
  return await getDownloadURL(fileReference);
}
