import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './PostInternship.css'; // Reuse the CSS from Post Internship

const EditInternship = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const internship = location.state;

  const [formData, setFormData] = useState({
    jobRole: '',
    description: '',
    requirements: '',
    location: '',
    months: '',
    stipend: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Check if internship is defined
    if (!internship) {
      navigate('/admin/dashboard'); // Redirect if internship is not provided
    } else {
      // Set the form data if internship exists
      setFormData({
        jobRole: internship.jobRole || '',
        description: internship.description || '',
        requirements: internship.requirements || '',
        location: internship.location || '',
        months: internship.months || '',
        stipend: internship.stipend || '',
      });
    }
  }, [internship, navigate]); // Dependencies include internship and navigate

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.put(`http://localhost:5000/api/internships/${internship._id}`, formData);
      setSuccess('Internship updated successfully');
      setTimeout(() => {
        navigate('/admin/dashboard'); // Navigate back to dashboard
      }, 2000);
    } catch (error) {
      setError('Failed to update internship');
      console.error(error);
    }
  };

  return (
    <div className="post-internship">
      <h2>Edit Internship</h2>
      {success && <div className="success-msg">{success}</div>}
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            onChange={onChange}
            value={formData.jobRole}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Internship Description"
            onChange={onChange}
            value={formData.description}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="requirements"
            placeholder="Requirements"
            onChange={onChange}
            value={formData.requirements}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
            value={formData.location}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="months"
            placeholder="Duration (Months)"
            onChange={onChange}
            value={formData.months}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="stipend"
            placeholder="Stipend"
            onChange={onChange}
            value={formData.stipend}
            required
          />
        </div>
        <button type="submit" className="post-btn">Update Internship</button>
      </form>
    </div>
  );
};

export default EditInternship;
