import React, { useState } from 'react';
<<<<<<< HEAD
import '../styles/Signup.css';
=======
import '../styles/Signup.css'; // Create a CSS file for styling
>>>>>>> d3619b1692f74ce5601ef6a7a95e6cad4a5a2c14

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
<<<<<<< HEAD
=======
      // Handle signup logic here
>>>>>>> d3619b1692f74ce5601ef6a7a95e6cad4a5a2c14
      console.log('Signup:', email, password);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
