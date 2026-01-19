"use client"
import React, { useState } from "react";
import './login.css'

function Login() {
  const [data, setData] = useState({
    name: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,       
      [name]: value 
    }));
  };

  const handleForm = (e) => {
    e.preventDefault(); 
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <form className="login" onSubmit={handleForm}>
      <h2 className="login__title">Login</h2>
      <input
        name="name"
        type="text"
        value={data.name}
        onChange={handleChange}
        className="login__input"
        placeholder="Username"
        required
      />

      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
        className="login__input"
        placeholder="Password"
        required
      />

      <button className="login__button login__button--primary" type="submit">
        Login
      </button>
    </form>
    </div>
  );
}

export default Login;
