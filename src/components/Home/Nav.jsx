import React, { useState } from "react";
import logom5 from "../../assets/logom5.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useMediaQuery } from "@mui/material";
import "./Nav.css";

const Nav = ({ showBtn = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isBelow1024 = useMediaQuery("(max-width: 1024px)");
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src={logom5} alt='' />
        </Link>
      </div>
      {isBelow1024 ? (
        <div className='menu' onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon fontSize='large' />
          ) : (
            <MenuOutlinedIcon fontSize='large' />
          )}
        </div>
      ) : null}

      <ul className={`nav ${menuOpen ? "open" : ""}`}>
        <li className='nav-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about'>About</Link>
        </li>

        <li className='nav-item'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        { isBelow1024 && menuOpen && (
        <div className='dropdown-btns'>
          <Link to='/login-page'>
            <Button
              variant='contained'
              sx={{ background: "#db3495", borderRadius: "10px" }}
            >
              Log in
            </Button>
          </Link>
          <Link to='/signup-page'>
            <Button
              variant='contained'
              sx={{ background: "#db3495", borderRadius: "10px" }}
            >
              Sign up
            </Button>
          </Link>
        </div>
      )}
      </ul>
      {showBtn && !isBelow1024 && (
        <div className="btncontainer">
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
        </div>
      )}
    
    </nav>
  );
};

export default Nav;
