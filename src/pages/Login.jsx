import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get data from form

    // Send data to api

    // Get response token

    const token = 'sjkdsaidjbifsailfudncakdjbka';
    localStorage.setItem('token', token);
    setUser({ name: 'Hussein' });
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
