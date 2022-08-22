// npm
import { useState, useEffect } from "react";

// files
import { auth } from "../firebase/firebase";
import { useAuthContext } from "./useAuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { resolvePath } from "react-router-dom";

export default function useRecoverPassword() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function recoverPassword(email) {
    setError(null);
    setLoading(true);

    try {
      const res = await sendPasswordResetEmail(auth, email);
      dispatch({ type: "RESET_PASSWORD", payload: res });
      console.log("response", res);
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
      // if (!isCancelled) {
      //   console.log(err.message);
      //   setError(err.message);
      //   setLoading(false);
      // }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { recoverPassword, error, loading };
}
