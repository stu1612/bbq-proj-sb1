import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <form>
      <div className="input-container">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </form>
  );
}
