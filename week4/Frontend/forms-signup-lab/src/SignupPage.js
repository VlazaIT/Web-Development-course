// src/SignupPage.jsx

import { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en'); // "en" is selected by default

  const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const isStrongPassword = password => {
    // A strong password contains at least 6 characters including a number, a lowercase and an uppercase letter.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
  };

  const Greeting = () => {
    switch (nationality) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <input
          id='email'
          type='email'
          className={`input ${isValidEmail(email) ? 'success' : 'error'}`}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <input
          id='password'
          type='password'
          className={`input ${isStrongPassword(password) ? 'success' : 'error'}`}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <select 
          id='nationality' 
          className="input"
          onChange={e => setNationality(e.target.value)} 
          value={nationality}
        >
          <option value='en'>English</option>
          <option value='de'>German</option>
          <option value='fr'>French</option>
        </select>

        <p>{Greeting()}, your email is {email}</p>

        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
