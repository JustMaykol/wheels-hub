import React, { useState } from 'react';
import {navigate} from 'gatsby';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="centered-container">
            <div className="container-content">
                <h2 style={{margin : "20px"}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{margin : "15px 20px"}}>
                        <label style={{marginRight : "40px"}} htmlFor="username">Email:</label>
                        <input
                            style={{color : "black"}}
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div style={{margin : "15px 20px"}}> 
                        <label style={{marginRight : "10px"}} htmlFor="password">Password:</label>
                        <input
                            style={{color : "black"}}
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button style={{padding : "5px 15px", marginBottom : "10px", color : "black"}} type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Login;