import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const { loading, loggedIn } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!loading && !loggedIn) return <Navigate to='/login' />;

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
