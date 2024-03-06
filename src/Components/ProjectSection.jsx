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
        NextJsCircleImage,
        TailwindImage,
        NodeJsImage,
        MongoDBImage,
        ReduxImage,
        VercelImage,
      ],
      title: "Tint & Orange",
      description: "It is a car modification company which provides sheets to protect your car from scratches.",
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
        NextJsCircleImage,
        TailwindImage,
        ReduxImage,
        VercelImage,
      ],
      title: "Breaking Copyrights",
      description: "A platform to download copyright-free YouTube music.",
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
        ExpressImage,
        NextJsCircleImage,
        VercelImage,
      ],
      title: "Isha Tattva",
      description: "A website for an interior designer to showcase her works and samples.",
      backgroundImage: "/Project3.png" 
    },
    {
      id: "project4",
      number: "04",
      direction: "left",
      skills: [
        NextJsCircleImage,
        TailwindImage,
        VercelImage,
      ],
      title: "Granit",
      description: "An architectural website to plan your building or home (Hebrew Language).",
      backgroundImage: "/Project4.png" 
    },
    
  ];

  return (
    <section id="projects" className="projectSection">
      <h2 className="projectTitle mb-12">Projects</h2>
      <div className="projectContainer">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
