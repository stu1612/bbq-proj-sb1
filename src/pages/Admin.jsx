// npm
import { useState } from "react";

// files
import InputField from "../components/InputField";
import setup from "../data/login.json";

// methods
function onSubmit() {}

export default function Admin() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <div className="admin-form">
        <form onSubmit={onSubmit}>
          <InputField setup={setup.email} state={[email, setEmail]} />
          <InputField setup={setup.password} state={[password, setPassword]} />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
}
