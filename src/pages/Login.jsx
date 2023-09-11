import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get data from form

    // Send data to api

    // Get response token

    const token = 'sjkdsaidjbifsailfudncakdjbka';
    localStorage.setItem('token', token);
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
