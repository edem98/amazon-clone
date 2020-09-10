import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://economictranscript.files.wordpress.com/2019/09/amazon-625x352.jpg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__cointainer">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="login__signInButton" onClick={login}>
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create your amazon account.
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
