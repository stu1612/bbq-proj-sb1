// files
import useStorage from "../hooks/useStorage";

export default function Progress({ fileState }) {
  // local state
  const [file, setFile] = fileState;
  // properties
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  return <div>Progress</div>;
}
