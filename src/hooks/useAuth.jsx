import { useEffect, useState } from 'react';

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLoggedIn(true);
    }

    setLoading(false);
  }, []);

  return { loading, loggedIn };
};

export default useAuth;
