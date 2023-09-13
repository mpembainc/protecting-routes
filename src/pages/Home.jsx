import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { loading, loggedIn } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!loading && !loggedIn) return <Navigate to='/login' />;

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>{user?.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
