import React, { useEffect, useState } from 'react';
import './AdminAccount.css'; // To style the Admin Account page

const AdminAccount = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    designation: '',
  });

  useEffect(() => {
    // Fetch the admin details from localStorage (you can replace this with an API call if necessary)
    const name = localStorage.getItem('adminName');
    const email = localStorage.getItem('adminEmail');
    const phoneNumber = localStorage.getItem('adminPhoneNumber');
    const designation = localStorage.getItem('adminDesignation');

    setAdminDetails({
      name: name || '',
      email: email || '',
      phoneNumber: phoneNumber || '',
      designation: designation || '',
    });
  }, []);

  return (
    <div className="admin-account-container">
      <h2>Admin Account</h2>
      <div className="admin-details">
        <p><strong>Name:</strong> {adminDetails.name}</p>
        <p><strong>Email:</strong> {adminDetails.email}</p>
        <p><strong>Phone Number:</strong> {adminDetails.phoneNumber}</p>
        <p><strong>Designation:</strong> {adminDetails.designation}</p>
      </div>
    </div>
  );
};

export default AdminAccount;
