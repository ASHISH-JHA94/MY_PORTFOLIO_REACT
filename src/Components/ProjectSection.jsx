import React from "react";
import ProjectCard from "./ProjectCard";

// Import images
import HTMLImage from "../assets/Images/stack/HTML.png";
import CSSImage from "../assets/Images/stack/CSS.png";
import JavascriptImage from "../assets/Images/stack/Javascript.svg";
import ExpressImage from "../assets/Images/stack/Express.png";
import NextJsCircleImage from "../assets/Images/stack/NextJsCircle.png";
import TailwindImage from "../assets/Images/stack/Tailwind.png";
import NodeJsImage from "../assets/Images/stack/NodeJs.svg";
import MongoDBImage from "../assets/Images/stack/MongoDB.svg";
import ReduxImage from "../assets/Images/stack/Redux.svg";
import VercelImage from "../assets/Images/stack/Vercel.svg";
const ProjectsSection = () => {
  const projects = [
    {
      id: "project1",
      number: "01",
      direction: "right",
      skills: [
        HTMLImage,
        CSSImage,
        JavascriptImage,
        ExpressImage,
        
        TailwindImage,
        NodeJsImage,
        MongoDBImage,
        
        VercelImage,
      ],
      title: "Wander Lust",
      description: "select hotels based on reviews and ratings, facilitating informed decisions on accommodations",
      backgroundImage: "/Project1.png" 
    },
    {
      id: "project2",
      number: "02",
      direction: "left",
      skills: [
        HTMLImage,
        CSSImage,
        JavascriptImage,
        NodeJsImage,
        ExpressImage,
        
        
        TailwindImage,
        
        
      ],
      title: "Airlust",
      description: "A platform to book your Flight Ticket with ease.",
      backgroundImage: "/Project2.png" 
    },
    {
      id: "project3",
      number: "03",
      direction: "right",
      skills: [
        HTMLImage,
        CSSImage,
        JavascriptImage,
        
      ],
      title: "Wellnest",
      description: "A website to keep you healthy.",
      backgroundImage: "/Project3.png" 
    },
    {
      id: "project4",
      number: "04",
      direction: "left",
      skills: [
        HTMLImage,
        CSSImage,
        NodeJsImage,
        MongoDBImage,
        ExpressImage,
        TailwindImage,
        VercelImage,
      ],
      title: "Tarang Tutorial",
      description: "A tuting website to stream online educational content.",
      backgroundImage: "/Project4.png" 
    },
    
  ];

  return (
    <section id="projects" className="projectSection">
      <h2 className="projectTitle mb-12 text-6xl">Projects</h2>
      <div className="projectContainer">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
