import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socio-Club</h3>
          <span className="loginDesc">Connect with the world!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegister">Create a new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
