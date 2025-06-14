import React, { useState } from "react";
import "../Pages/loginFormStyle/Login.css";
import '../font.css'
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const host = "http://localhost:3000";

  const navigate = useNavigate();

  //Состояние для входа
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //Вход
  const handleLogin = async () => {
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${host}/api/developer/account/login`, {
        nickname: login,
        password: password
      });

      if(response.data.success) {
        setSuccess(response.data.message);
        Cookies.set('Admin', JSON.stringify(response.data.admin));
        navigate('/')
      }
      else {
        setError(response.data.message);
      }
      
    } catch (e) {
      setError('Ошибка сервера')
      console.error("Ошибка входа:", e);
    };
  };

  return (
    <div className="main-container-login">
      <div className="form">
        <form onSubmit={(e) => {
          e.preventDefault(); 
            handleLogin();      
              }}>
          <h1 className="form__title">Kolsai Group</h1>
          <div className="form__inputs">
            <input
              type="text"
              className="form__input"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
