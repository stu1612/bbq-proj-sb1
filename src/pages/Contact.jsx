// files
import { useModal } from "../context/ModalContext";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  // properties
  const { setModal } = useModal();
  return (
    <div>
      <img src="" alt="" />
      <div>
        <button onClick={() => setModal(<ContactForm />)} className="btn">
          Contact Us
        </button>
      </div>
    </div>
  );
}
