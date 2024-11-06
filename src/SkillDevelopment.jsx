import React from 'react';
import './SkillDevelopment.css';

const SkillDevelopment = () => {
  const skills = [
    {
      title: "Communication Skills",
      description: "Learn to communicate effectively in both personal and professional settings.",
      link: "https://www.youtube.com/watch?v=VdK2CqAfLPc"
    },
    {
      title: "Aptitude Skills",
      description: "Enhance your problem-solving abilities with aptitude tests.",
      link: "https://www.youtube.com/watch?v=aQ92w2D_2GU&list=PLMufDeLh5x2DVLPcfJGUxd_Yd9LXJZ3NK"
    },
    {
      title: "Soft Skills",
      description: "Develop skills like teamwork, leadership, and adaptability.",
      link: "https://youtu.be/nwlPIoFhNc0"
    }
  ];

  return (
    <div className="skill-development-container">
      <h2>Skill Development</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDevelopment;
