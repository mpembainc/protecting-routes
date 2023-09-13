import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        height: 60,
        backgroundColor: 'orange',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
      }}
    >
      <h5>Header</h5>

      <p>{user?.name}</p>
    </div>
  );
};

export default Navbar;
