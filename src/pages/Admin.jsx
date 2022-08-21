// npm
import { useState } from "react";

// files
import InputField from "../components/InputField";
import setup from "../data/login.json";
import useLogin from "../hooks/useLogin";

export default function Admin() {
  const { login, error, loading } = useLogin();
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // methods
  function onSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <section>
      <div className="admin-form">
        {loading && <p>Loading ..</p>}
        <form onSubmit={onSubmit}>
          <InputField setup={setup.email} state={[email, setEmail]} />
          <InputField setup={setup.password} state={[password, setPassword]} />
          <button>Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  );
}
