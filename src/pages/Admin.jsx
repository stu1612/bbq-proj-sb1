// files
import useLogout from "../hooks/useLogout";

export default function Admin() {
  const { logout } = useLogout();
  return (
    <div>
      <h2>admin</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
