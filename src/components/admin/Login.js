import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { LoginS } from "../../styles/Styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { baseUrl,  setSesion, sesionData } = useContext(MainContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const response = await fetch(`${baseUrl}/server/api/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        //console.log(response.json());

        const { token, error, msg } = await response.json();
        if (!error) {
          localStorage.setItem("token", token);
          setSesion(true);
          //  setError(msg);
          // Redirige al usuario a la página principal de la aplicación
          window.location.replace("/");
        } else {
          //   console.log(msg);
          setError(msg);
        }
      } else {
        throw new Error("La autenticación ha fallado");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(error);
  return (
    <LoginS>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <i className="fa-solid fa-pizza-slice"></i>
          </div>
         
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Iniciar sesión</button>
          <div style={{height:50, margin:'0 auto'}}>{error && <p style={{color:"#a42220"}}>{error}</p>}</div>
        </form>
      </div>
    </LoginS>
  );
};

export default Login;
