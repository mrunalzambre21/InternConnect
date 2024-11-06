import React, { useState } from 'react';
import axios from 'axios';
import './AdminDetails.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const AdminDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: ''
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/details', formData);
      console.log('Admin details saved:', response.data);

      setSuccessMessage('Admin details saved successfully!');
      setErrorMessage(''); // Clear any previous error message
      setTimeout(() => {
        navigate('/post/internship'); // Adjust path as needed
      }, 2000);
    } catch (error) {
      console.error('Error saving admin details:', error);
      setErrorMessage('Error saving admin details.'); // Set error message
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="admin-details-container">
      <h2>Admin Details</h2>
      <form onSubmit={handleSubmit} className="admin-details-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input type="text" name="designation" id="designation" value={formData.designation} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
    </div>
  );
};

export default AdminDetails;
