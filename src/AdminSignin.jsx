import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminSign.css'; // Import CSS file for styling

const AdminSignin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/admin/signin', formData);
      setSuccess(response.data.message); // Display success message
      
      const {token,adminName} =response.data;
      // Save admin name and token in local storage
      localStorage.setItem('adminToken',token);
      localStorage.setItem('adminName',adminName);
      setLoading(false);

      // Redirect to Admin Dashboard after successful signin
      setTimeout(() => {
        navigate('/admin/details'); // Adjust this route as per your app's structure
      }, 2000); // Redirect after 2 seconds to show the success message
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to sign in. Please try again later.';
      console.error('Signin Error:', errorMessage);
      setError(errorMessage); // Display error message
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Admin Signin</h2>
      
      {/* Success message */}
      {success && <div className="success-msg">{success}</div>}
      
      {/* Error message */}
      {error && <div className="error-msg">{error}</div>}
      
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <button type="submit" className="signin-btn" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default AdminSignin;
