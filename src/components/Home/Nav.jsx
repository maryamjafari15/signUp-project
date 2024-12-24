import React from 'react'
import logom5 from "../../assets/logom5.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({showBtn= true}) => {
  return (
    <nav className='navbar'>
    <div className='logo'>
      <Link to="/">
      <img src={logom5} alt='' />
      </Link>
    </div>
    <ul className='nav'>
      <li className='nav-item'>
        <a href='/'>Home</a>
      </li>
      <li className='nav-item'>
        <a href='/about'>About</a>
      </li>

      <li className='nav-item'>
        <a href='/contact'>Contact Us</a>
      </li>
    </ul>
    {showBtn &&
    <div className='btncontainer'>
      <Link to='/login-page'>
        {" "}
        <Button
          variant='contained'
          sx={{ background: "#db3495", borderRadius: "10px" }}
        >
          {" "}
          Log in{" "}
        </Button>{" "}
      </Link>{" "}
      <Link to='/signup-page'>
        {" "}
        <Button
          variant='contained'
          sx={{ background: "#db3495", borderRadius: "10px" }}
        >
          {" "}
          Sign up{" "}
        </Button>{" "}
      </Link>
    </div>}
  </nav>
  )
}

export default Nav