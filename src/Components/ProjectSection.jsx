import React from "react";
import ProjectCard from "./ProjectCard";

import HTMLImage from "../assets/Images/stack/HTML.png";
import CSSImage from "../assets/Images/stack/CSS.png";
import JavascriptImage from "../assets/Images/stack/Javascript.svg";
import ExpressImage from "../assets/Images/stack/Express.png";
import TailwindImage from "../assets/Images/stack/Tailwind.png";
import NodeJsImage from "../assets/Images/stack/NodeJs.svg";
import MongoDBImage from "../assets/Images/stack/MongoDB.svg";
import ReduxImage from "../assets/Images/stack/Redux.svg";
import VercelImage from "../assets/Images/stack/Vercel.svg";
import ThreeJsImage from "../assets/Images/stack/threejs.png";
import DockerImage from "../assets/Images/stack/Docker.svg";
import KubernetesImage from "../assets/Images/stack/K8s.svg";
import GitImage from "../assets/Images/stack/Git.svg";
import ReactImage from "../assets/Images/stack/React.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: "project1",
      number: "01",
      direction: "right",
      skills: [HTMLImage, CSSImage, JavascriptImage, ExpressImage, TailwindImage, NodeJsImage, MongoDBImage, ThreeJsImage, GitImage],
      title: "Design With Spark",
      description: "AI-driven T-shirt design platform with admin dashboard and design suggestion chatbot. 2nd place in a hackathon, reduced costs by 50%, increased sales by 30%.",
      backgroundImage: "/spark.png",
      deployedLink: "https://design-with-spark.vercel.app/",
    },
    {
      id: "project2",
      number: "02",
      direction: "left",
      skills: [MongoDBImage, NodeJsImage, ExpressImage, JavascriptImage, ReactImage, DockerImage, KubernetesImage],
      title: "Book4u",
      description: "Web app for students to find affordable books, featuring order tracking, map integration, admin analytics, and Kubernetes deployment.",
      backgroundImage: "/Book4u.png",
      deployedLink: "https://book4u-phi.vercel.app/",
    },
    {
      id: "project3",
      number: "03",
      direction: "right",
      skills: [MongoDBImage, NodeJsImage, ExpressImage, ReactImage],
      title: "Data Visualization Dashboard",
      description: "Global energy trends dashboard with data analysis, real-time visualization, meeting scheduling, and export options.",
      backgroundImage: "/Datavisualization.png",
      deployedLink: "https://data-visualization-dashboard-frontend-two.vercel.app/",
    },
    {
      id: "project4",
      number: "04",
      direction: "left",
      skills: [HTMLImage, CSSImage, JavascriptImage, ExpressImage, TailwindImage, NodeJsImage, MongoDBImage, ReduxImage, VercelImage],
      title: "Wander Lust",
      description: "Platform for selecting hotels based on reviews and ratings, aiding informed decisions on accommodations.",
      backgroundImage: "/wander.png",
      deployedLink: "https://wanderlust.example.com",
    },
    {
      id: "project5",
      number: "05",
      direction: "right",
      skills: [HTMLImage, CSSImage, JavascriptImage, NodeJsImage, ExpressImage, TailwindImage],
      title: "Airlust",
      description: "Flight ticket booking platform focused on user ease and accessibility.",
      backgroundImage: "/Airlust.png",
      deployedLink: "https://airlust.example.com",
    },
    {
      id: "project6",
      number: "06",
      direction: "left",
      skills: [HTMLImage, CSSImage, JavascriptImage],
      title: "Wellnest",
      description: "Website promoting health and wellness through informative content.",
      backgroundImage: "/wellnest.png",
      deployedLink: "https://wellnest.example.com",
    },
    {
      id: "project7",
      number: "07",
      direction: "right",
      skills: [HTMLImage, CSSImage, NodeJsImage, MongoDBImage, ExpressImage, TailwindImage, VercelImage],
      title: "Tarang Tutorial",
      description: "Online educational platform offering streaming tutorials and content.",
      backgroundImage: "/Tarang.png",
      deployedLink: "https://tarangtutorial.example.com",
    },
  ];

  return (
    <section id="projects" className="projectSection">
      <h2 className="projectTitle mb-4 text-6xl">Projects</h2>
      <div className="projectContainer mx-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
