// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

import Hero from './Hero';
import HomePage from './HomePage';
import InternshipOpportunities from './InternshipOpportunities';

import InterviewPreparation from './InterviewPreparation'
import CareerRoadmap from './CarreerRoadmap';
import SkillDevelopment from './SkillDevelopment';
import SignUp from './SignUp';
import AdminSignUp from './AdminSignUp';
import VerifyAdmin from './VerifyAdmin';
import PostInternship from './PostInternship';
import AdminDetails from './AdminDetails';
import AdminDashboard from './AdminDashBoard';
import EditInternship from './EditInternship';
import AdminAccount from './AdminAccount';
import './App.css';
import AdminSignin from './AdminSignin';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/signup" element={<AdminSignUp />} /> {/* Update here */}
          <Route path="/verify/email/" element={<VerifyAdmin />} />
          <Route path="admin/account" element={<AdminAccount />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/internships" element={<InternshipOpportunities />} />
          <Route path="/skills" element={<SkillDevelopment />} />
          <Route path="/interviewpreparation" element={<InterviewPreparation />} />
          <Route path="/carreerroadmap" element={<CareerRoadmap />} />
          <Route path="/post/internship" element={<PostInternship/>} />
          <Route path="/admin/details" element={<AdminDetails/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}/>
          <Route path="/edit/internship" element={<EditInternship />} />
          <Route path="skilldevelopment" element={<SkillDevelopment />} />
          <Route path="admin/signin"element={<AdminSignin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
