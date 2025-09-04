
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../../assets/username.png";
import lockIcon from "../../../assets/Password.png";
import loginImg from "../../../assets/SignIn.png";
import bgImg from "../../../assets/authbg.png";

import './SignIn.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users?username=${username}`);
      const data = await response.json();

      if (data.length === 0) {
        setError("User not found!");
        return;
      }

      const user = data[0];

      if (user.password === password) {
        setError("");
        navigate("/dashboard"); 
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setError("Invalid password!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="login-wrapper">
        <div className="login-box">
          {/* Left: Form */}
          <div className="login-left">
            <h2>Sign In</h2>

            {/* Username */}
            <div className="input-group">
              <img src={userIcon} alt="user" className="input-icon" />
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // ✅ bind state
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <img src={lockIcon} alt="lock" className="input-icon" />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // ✅ bind state
              />
            </div>

            {/* Show Error */}
            {error && <p className="error">{error}</p>}

            <p className="signup-text">
              Don’t have an account? <Link to="/SignUp">Create one</Link>
            </p>

            {/* Button */}
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>

          {/* Right: Image */}
          <div className="login-right">
            <img src={loginImg} alt="Login Visual" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
