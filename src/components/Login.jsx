import React, { useState } from 'react';
<<<<<<< HEAD
import '../styles/Login.css';
=======
import '../styles/Login.css'; // Create a CSS file for styling
>>>>>>> d3619b1692f74ce5601ef6a7a95e6cad4a5a2c14

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    // Handle login logic here
>>>>>>> d3619b1692f74ce5601ef6a7a95e6cad4a5a2c14
    console.log('Login:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
