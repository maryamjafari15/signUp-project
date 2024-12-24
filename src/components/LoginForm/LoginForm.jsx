import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import Nav from "../Home/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password.");
      return;
    }

    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true); 

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/");  
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Login failed"}`);
      } else if (error.request) {
        alert("Network error. Please try again.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <Nav showBtn= {false} />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }} />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <IoLockClosed style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }} />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "wait..." : "Login"}
        </button>
        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/signup-page" >Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
