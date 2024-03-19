import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("Successfully logged in");
        navigate("/login");
    };

  return (
    <div className='home-container'>
        <h2>Homepage</h2>
        <p>Welcome - {userName.name}</p>
        <button type='button' onClick={handleLogout} >Logout</button>
    </div>
  );
};

export default Home;