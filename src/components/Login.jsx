import React from "react";
import { IconApple, IconGoogle } from "./Icon.jsx";

const Login = () => {
  return (
    <div className="container">
      <h1>Log In</h1>
      <div className="otherlogin">
        <button>
          <IconGoogle />
          Google
        </button>
        <button>
          <IconApple />
          Apple
        </button>
      </div>
      <div className="divider">
        <span></span>
        <i>Or</i>
        <span></span>
      </div>
      <div className="form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email..." />
          <span>tooltips message</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
