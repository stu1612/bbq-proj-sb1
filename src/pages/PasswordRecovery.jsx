// npm
import { useState } from "react";
import useRecoverPassword from "../hooks/useRecoverPassword";

export default function PasswordRecovery() {
  // local state
  const [email, setEmail] = useState("");
  // properties
  const { recoverPassword, error, loading } = useRecoverPassword();

  // methods
  function onHandleSubmit(event) {
    event.preventDefault();
    recoverPassword(email);
  }
  return (
    <section id="login">
      <form onSubmit={onHandleSubmit}>
        {loading && <p>Loading ...</p>}
        <label>
          Reset Password:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
