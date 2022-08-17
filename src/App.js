// npm

// files
import { useModal } from "./context/ModalContext";
import "./styles/main.scss";

export default function App() {
  const { setModal } = useModal();

  return (
    <div className="App">
      <h2>Some title</h2>
      <button onClick={() => setModal(<h1>Hewllo Modal</h1>)}>open form</button>
    </div>
  );
}
