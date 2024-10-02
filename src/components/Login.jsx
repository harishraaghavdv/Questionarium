import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import leftLogo from '../assets/cell.png'; // Update with your actual path
import rightLogo from '../assets/kg.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Authentication logic can be added here if needed
        navigate('/Departments');  // Redirect to Departments page after login
    };

    return (
        <div className="login-container">
            <div className="header">
                <img src={leftLogo} alt="Left Logo" className="logo left-logo" />
                <h1>
                    <div style={{ color: 'black'}}>KGISL Institute of Technology</div>
                </h1>

                <img src={rightLogo} alt="Right Logo" className="logo right-logo" />
            </div>
            <div className="login-box">
                <h1 className="header-title">WELCOME TO QGEN</h1>
                <div className="input-field">
                    <label>UserName</label>
                    <input 
                        type="text" 
                        placeholder="Enter your Email id" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button className="login-button" onClick={handleLogin}>Sign in</button>
            </div>
        </div>
    );
};

export default Login;
