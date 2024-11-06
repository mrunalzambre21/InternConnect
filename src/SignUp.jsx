import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <div className="signup-options">
          <a href="/signup/student" className="signup-option">
            Sign Up as Student
          </a>
          <a href="/admin/signup" className="signup-option">
            Sign Up as Admin
          </a>
        </div>

        <div className="login-section">
          <h3>Already have an account?</h3>
          <div className="login-options">
            <a href="/login/student" className="login-option">
              Sign In as Student
            </a>
            <a href="/admin/signin" className="login-option">
              Sign In as Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
