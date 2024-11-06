import React, { useState } from 'react';
import './InternshipOpportunities.css'; 

const InternshipOpportunities = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);

  const internships = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'Remote',
      description: `
        Responsibilities: 
        - Build and maintain web applications using React.js and CSS.
        - Collaborate with UI/UX designers to improve user experience.
        - Optimize applications for maximum speed and scalability.
        
        Required Skills: 
        - Proficiency in HTML, CSS, JavaScript, and React.
        - Experience with responsive design.
        
        Duration: 6 months
      `,
    },
    {
      title: 'Backend Developer Intern',
      company: 'InnoWorks',
      location: 'New York, NY',
      description: `
        Responsibilities: 
        - Develop and maintain server-side logic using Node.js.
        - Work with databases such as MySQL and MongoDB.
        - Ensure high performance and responsiveness of backend systems.
        
        Required Skills: 
        - Knowledge of Node.js, Express, and API development.
        - Experience with database management and querying.
        
        Duration: 3 months
      `,
    },
    {
      title: 'Data Science Intern',
      company: 'DataMinds',
      location: 'San Francisco, CA',
      description: `
        Responsibilities: 
        - Analyze structured and unstructured data.
        - Build predictive models and perform data visualization.
        - Collaborate with the data engineering team.
        
        Required Skills: 
        - Proficiency in Python, SQL, and machine learning libraries.
        - Familiarity with data visualization tools like Tableau.
        
        Duration: 4 months
      `,
    },
    // Add more internships as needed
  ];

  const openModal = (internship) => {
    setSelectedInternship(internship);
  };

  const closeModal = () => {
    setSelectedInternship(null);
  };

  return (
    <div className="internship-opportunities">
      <h2 className="heading">Get Your Internship</h2> {/* Added heading above */}
      
      <div className="internship-cards">
        {internships.map((internship, index) => (
          <div key={index} className="internship-card">
            <h3>{internship.title}</h3>
            <p>{internship.company} - {internship.location}</p>

            <button 
              onClick={() => openModal(internship)} 
              className="details-button"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <h2 className="heading">Explore More Internships Below</h2> {/* Added heading below */}
      
      {selectedInternship && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedInternship.title}</h3>
            <p><strong>{selectedInternship.company} - {selectedInternship.location}</strong></p>
            <pre>{selectedInternship.description}</pre>
            <button className="apply-button">Apply Now</button>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipOpportunities;
