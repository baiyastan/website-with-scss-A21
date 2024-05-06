import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/svg/logo.svg";

function Header() {
  const navigate = useNavigate();

  function goToPages(link) {
    navigate(link);
  }
  return (
    <header className="header">
      <div className="menu">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Doctor</li>
          <li>Services</li>
          <li>Review</li>
        </ul>
      </div>
      <div className="auth">
        <button onClick={() => goToPages("/login")} className="signin">
          Sign In
        </button>
        <button onClick={() => goToPages("/register")} className="signup">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
