import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (id === "chiku" && pass === "1121") {
      navigate("/home");
    } else {
      alert("Wrong credentials astronaut 🚀");
    }
  };

  return (
    <div className="portal">
      <h1>🚀 Birthday Space Portal</h1>

      <input
        placeholder="Secret ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Unlock Memories</button>
    </div>
  );
}

export default Login;