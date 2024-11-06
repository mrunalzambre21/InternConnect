import React from 'react';
import './CarreerRoadmap.css';

const roadmaps = [
  {
    title: 'Software Developer',
    description: 'Learn about the skills and technologies needed to become a software developer.',
    link: 'https://youtu.be/Fn1wRGMYbL0?si=7fPtlk4UOKbBF477', // Software Developer Career Path
  },
  {
    title: 'Data Scientist',
    description: 'Discover the path to becoming a data scientist and the tools required.',
    link: 'https://youtu.be/uIUvpJdYgSA?si=DmH5xSLamLmcPmlS', // Data Scientist Career Path
  },
  {
    title: 'Web Developer',
    description: 'Explore the essential skills and resources for a successful web development career.',
    link: 'https://youtu.be/z0n1aQ3IxWI?si=RIYPVQuYGN25axjm', // Web Developer Career Path
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Understand the skills and certifications needed for a career in cybersecurity.',
    link: 'https://youtu.be/vK4Mno4QYqk?si=bSR4L8ALdhBpN7RZ', // Cybersecurity Analyst Career Path
  },
  {
    title: 'Machine Learning Engineer',
    description: 'Get insights into becoming a machine learning engineer and the necessary skills.',
    link: 'https://youtu.be/1vsmaEfbnoE?si=j1zHMKMd2U-Ixxda', // Machine Learning Engineer Career Path
  },
];

const CareerRoadmap = () => {
  return (
    <div className="career-roadmap">
      <h2>Career Roadmaps</h2>
      <div className="roadmap-container">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="roadmap-card">
            <h3>{roadmap.title}</h3>
            <p>{roadmap.description}</p>
            <a href={roadmap.link} target="_blank" rel="noopener noreferrer" className="roadmap-link">
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmap;
