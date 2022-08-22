// npm
import { useState } from "react";

// files
import InputField from "../components/InputField";
import setup from "../data/login.json";
import useLogin from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Login() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  const { login, error, loading } = useLogin();
  const { user } = useAuthContext();

  // methods
  function onSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <main id="login">
      <h2>Hello, you are currently {user ? "signed" : "not signed"} in!</h2>
      <div className="admin-form">
        {loading && <p>Loading ..</p>}
        <form onSubmit={onSubmit}>
          <InputField setup={setup.email} state={[email, setEmail]} />
          <InputField setup={setup.password} state={[password, setPassword]} />
          <button>Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
