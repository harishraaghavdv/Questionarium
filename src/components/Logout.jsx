import React from 'react';
import './Logout.css'; // Import the CSS file

const LoggedOut = () => {
  return (
    <div className="container">
      <div className="box">
        <p>Logged out</p>
        <a href="#" className="sign-in">Sign In</a>
      </div>
    </div>
  );
};

export default LoggedOut;
