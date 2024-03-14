import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ number, direction, title, description, skills, backgroundImage }) => {
  return (
    <div className={`relative projectCard ${direction === 'left' ? 'leftNumber' : 'rightNumber'} bg-cover bg-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>

<div className="absolute top-10 right-10 text-white text-6xl md:text-9xl font-semibold hidden z-10 transition duration-800 projectNumber">{number}</div>
      <div className="projectContent md:left-20 top-10">
        <div className="projectSkillsContainer  flex flex-wrap justify-start gap-3">
          {skills.map((skill, index) => (
            <img
              key={index}
              className="projectSkill object-fit-cover max-w-full h-auto md:max-w-[60%] md:size-10 size-8"
              src={skill}
              alt=""
            />
          ))}
        </div>
        <h2 className="projectHeading text-6xl">{title}</h2>
        <p className="projectSubHeading md:text-2xl text-base">{description}</p>
        <div className="btnGroup">
          <button className="btn btnProject p-1 md:p-4">Read More</button>
          <IconButton
            href="https://github.com/ASHISH-JHA94/Wanderlust.git"
            target="_blank"
            title="GitHub Repository"
            sx={{ '& svg': { fontSize: 45 } }} 
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://wanderlustproject-f938.onrender.com/"
            target="_blank"
            title="Live Link"
    >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
