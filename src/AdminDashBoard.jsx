import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [internships, setInternships] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/internships'); // Ensure this matches your backend route
        setInternships(response.data);
      } catch (error) {
        setError('Failed to fetch internships');
        console.error(error);
      }
    };

    fetchInternships();
  }, []);

  const deleteInternship = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/internships/${id}`);
      setInternships(internships.filter(internship => internship._id !== id));
      setSuccess('Internship deleted successfully');
    } catch (error) {
      setError('Failed to delete internship');
      console.error(error);
    }
  };

  const editInternship = (internship) => {
    navigate('/edit/internship', { state: internship }); // Navigate to EditInternship and pass the internship as state
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {success && <div className="success-msg">{success}</div>}
      {error && <div className="error-msg">{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Job Role</th>
            <th>Description</th>
            <th>Requirements</th>
            <th>Location</th>
            <th>Duration (Months)</th>
            <th>Stipend</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {internships.map((internship) => (
            <tr key={internship._id}>
              <td data-label="Job Role">{internship.jobRole}</td>
              <td data-label="Description">{internship.description}</td>
              <td data-label="Requirements">{internship.requirements}</td>
              <td data-label="Location">{internship.location}</td>
              <td data-label="Duration (Months)">{internship.months}</td>
              <td data-label="Stipend">{internship.stipend}</td>
              <td>
                <div className="button-container">
                  <button onClick={() => editInternship(internship)}>Edit</button>
                  <button onClick={() => deleteInternship(internship._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
