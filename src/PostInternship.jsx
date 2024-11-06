import React, { useState } from 'react';
import axios from 'axios';
import './PostInternship.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

const PostInternship = () => {
  const [formData, setFormData] = useState({
    jobRole: '',
    description: '',
    requirements: '',
    location: '',
    months: '',
    stipend: '',
  });
  
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Define navigate using useNavigate

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Log the form data
    try {
      // Ensure this matches your backend route setup
      await axios.post('http://localhost:5000/api/internships', formData); // Updated URL

      setSuccess('Internship posted successfully!');
      setError(''); // Reset the error message on successful submission
      setFormData({ jobRole: '', description: '', requirements: '', location: '', months: '', stipend: '' });
      
      // Navigate to the admin dashboard after a successful post
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 2000); // Optionally add a timeout to display the success message before navigating
    } catch (error) {
      setError('Failed to post internship. Please try again.');
      setSuccess(''); // Reset the success message on error
      console.error('Post Internship Error:', error);
    }
  };

  return (
    <div className="post-internship">
      <h2>Post a New Internship</h2>
      {success && <div className="success-msg">{success}</div>}
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            value={formData.jobRole}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Internship Description"
            value={formData.description}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="requirements"
            placeholder="Requirements"
            value={formData.requirements}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="months"
            placeholder="Duration (Months)"
            value={formData.months}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="stipend"
            placeholder="Stipend"
            value={formData.stipend}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="post-btn">Post Internship</button>
      </form>
    </div>
  );
};

export default PostInternship;
