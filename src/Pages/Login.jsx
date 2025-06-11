import React from "react";
import "../Pages/loginFormStyle/Login.css";
import '../font.css'

function LoginPage() {
  return (
    <div className="main-container-login">
      <div className="form">
        <form action="">
          <h1 className="form__title">Kolsai Group</h1>
          <div className="form__inputs">
            <input
              type="text"
              className="form__input"
              required
              placeholder="Email"
            />
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              required
            />
          </div>
          <a className="form__password" href="#">
            Forgot password
          </a>
          <button className="form__button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
