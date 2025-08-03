// src/pages/Login.tsx
import React, { useState } from 'react';
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src="/images/Group.svg" alt="Logo" className="login__logo" />
        <img src="/images/pablo-sign-in 1.png" alt="Sign In Illustration" className="login__illustration" />
      </div>

      <div className="login__right">
        <h1 className="login__title">Welcome!</h1>
        <p className="login__subtitle">Enter details to login.</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="login__password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="login__toggle"
              onClick={togglePassword}
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          </div>

          <a href="#" className="login__forgot">
            FORGOT PASSWORD?
          </a>

          <button type="submit" className="login__btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
