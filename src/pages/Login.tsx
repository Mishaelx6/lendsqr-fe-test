// src/pages/Login.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss';
import { debounce } from 'lodash';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      console.log('Already authenticated, navigating to /dashboard');
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  // Debounce input changes
  const setUsernameDebounced = useCallback(debounce((value: string) => {
    setUsername(value.trim());
    console.log('Username updated:', value.trim());
  }, 300), []);

  const setPasswordDebounced = useCallback(debounce((value: string) => {
    setPassword(value.trim());
    console.log('Password updated:', value.trim());
  }, 300), []);

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with username:', username, 'password:', password);
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!username || password.length < 6) {
      setError('Please enter a valid username and a password with at least 6 characters.');
      console.log('Validation failed:', { username, password });
      setIsSubmitting(false);
      return;
    }

    try {
      const body = JSON.stringify({ username, password, expiresInMins: 60 });
      console.log('Sending request to https://dummyjson.com/auth/login with body:', body);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body,
      });

      const data = await response.json();
      console.log('API response:', data, 'Status:', response.status);

      if (!response.ok) {
        throw new Error(data.message || `Login failed with status ${response.status}`);
      }

      console.log('Login successful, token:', data.token);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', data.token);
      console.log('Navigating to /dashboard');
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      console.error('Login error:', err.message);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <div className="login__mobile-logo">
        <img src="/images/Group.svg" alt="Logo" loading="lazy" />
      </div>
      <div className="login__left">
        <img src="/images/Group.svg" alt="Logo" className="login__logo" loading="lazy" />
        <img
          src="/images/pablo-sign-in 1.png"
          alt="Sign In Illustration"
          className="login__illustration"
          loading="lazy"
        />
      </div>
      <div className="login__right">
        <h1 className="login__title">Welcome!</h1>
        <p className="login__subtitle">Enter details to login (e.g., kminchelle, 0lelplR).</p>
        {error && <p className="login__error" role="alert">{error}</p>}
        <form className="login__form" onSubmit={handleSubmit} aria-label="Login form">
          <input
            type="text"
            placeholder="Username (e.g., kminchelle)"
            required
            value={username}
            onChange={e => setUsernameDebounced(e.target.value)}
            aria-label="Username"
          />
          <div className="login__password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (e.g., 0lelplR)"
              required
              value={password}
              onChange={e => setPasswordDebounced(e.target.value)}
              aria-label="Password"
            />
            <button type="button" className="login__toggle" onClick={togglePassword}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          </div>
          <a href="#" className="login__forgot">
            FORGOT PASSWORD?
          </a>
          <button type="submit" className="login__btn" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'LOG IN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;