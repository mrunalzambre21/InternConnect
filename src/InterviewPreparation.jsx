import React from 'react';
import './InterviewPreparation.css';

const InterviewPreparation = () => {
  const resources = [
    {
      title: "GeeksforGeeks",
      description: "Comprehensive resources for interview preparation.",
      link: "https://www.geeksforgeeks.org/"
    },
    {
      title: "JavaTpoint",
      description: "Interview preparation tips and tutorials.",
      link: "https://www.javatpoint.com/"
    },
    {
      title: "YouTube Interview Preparation",
      description: "Watch videos for tips and techniques.",
      link: "https://www.youtube.com/results?search_query=interview+preparation"
    }
  ];

  return (
    <div className="interview-preparation-container">
      <h2>Interview Preparation</h2>
      <div className="resources-list">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">Visit</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPreparation;
