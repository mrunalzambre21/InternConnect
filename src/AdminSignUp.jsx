import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminSignUp.css';

const AdminSignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/admin/signup', formData);
      setSuccessMessage('Signup successful! Please check your email to verify your account.');
      setLoading(false);
    } catch (error) {
      console.error('Signup error:', error.response);
      const errorMessage = error.response?.data?.message || 'Failed to sign up admin. Please try again later.';
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Admin Signup</h2>
      {error && <div className="error-msg">{error}</div>}
      {successMessage && <div className="success-msg">{successMessage}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
            value={formData.name}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            value={formData.email}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={formData.password}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="signup-btn" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
