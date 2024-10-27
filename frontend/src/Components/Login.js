import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    if (!validateForm(email, password)) return;
  
    try {
      console.log('Sending login request with:', { email, password }); // Debug log
      const response = await axios.post('http://localhost:8080/userlogin', { email, password });
  
      console.log('Response:', response.data); // Debug log
      if (response) {
        login(response.data.token);
        alert('Login successfull');
        navigate('/');
      } else {
        alert('Invalid username or password.');
      }
    } catch (error) {
      handleLoginError(error);
    }
  };
  return (
    <div className="container-2">
      <div className="center">
        <div className="image-container">
          <img src="/assets/images/sign_in image.jpg" alt="desktop" />
        </div>
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            label="Email"
          />
          <TextField
            type="password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
            label="Password"
          />
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="/Registration">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

const TextField = ({ type, name, value, handleChange, label }) => (
  <div className="txt_field">
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      required
    />
    <label>{label}</label>
  </div>
);

const validateForm = (email, password) => {
  if (email.trim() === '') {
    alert('Please enter your email.');
    return false;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  return true;
};

const handleLoginError = (error) => {
  if (error.response && error.response.data && error.response.data.error) {
    console.error('Login failed:', error.response.data.error);
    alert('Login failed');
  } else {
    console.error('Login failed:', error.message);
    alert('Login failed');
  }
};

export default Login;
