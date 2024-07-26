import React, { useState } from 'react';
import './CSS/loginsignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (agree) {
      const newUser = { name, email, password };
  
      try {
        const response = await fetch('http://localhost:3033/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('User added:', data);
  
        // Clear form
        setName('');
        setEmail('');
        setPassword('');
        setAgree(false);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    } else {
      alert('You must agree to the terms and conditions');
    }
  };
  

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <form  className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit()}>Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
