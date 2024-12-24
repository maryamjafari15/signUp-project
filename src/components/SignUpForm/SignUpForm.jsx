import React, { useState } from "react";
import "./SignUpForm.css"
import Nav from "../Home/Nav";
import { FaUser } from "react-icons/fa";
import { IoLockClosed, IoMail } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all the fields");
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        email,
        password,
      });
      if (response.status === 201) { 
        alert("Sign Up successful!");
        navigate("/login-page"); 
      } else {
        alert("Sign Up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div className='containerSignUp'>
      <Nav showBtn= {false} />
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
           <FaUser
            style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }}
          />
        </div>
        <div className='input-box'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <IoMail
            style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }}
          />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <IoLockClosed
            style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }}
          />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <IoLockClosed
            style={{ marginLeft: "-40px", color: "#fff", fontSize: "20px" }}
          />
        </div>

        <button type='submit'>Sign Up</button>
        <div className='register-link'>
          <p>
            Already have an account?{" "}
            <a href='/login-page'>Login</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm