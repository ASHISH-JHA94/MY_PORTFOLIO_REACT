import React from "react";
import HTMLImage from "../assets/Images/stack/HTML.png";
import CSSImage from "../assets/Images/stack/CSS.png";
import JavascriptImage from "../assets/Images/stack/Javascript.svg";
import ReactImage from "../assets/Images/stack/React.png";
import NodeJsImage from "../assets/Images/stack/NodeJs.svg";
import NextImage from "../assets/Images/stack/Next.svg";
import ReduxImage from "../assets/Images/stack/Redux.svg";
import TailwindImage from "../assets/Images/stack/Tailwind.png";
import BootstrapImage from "../assets/Images/stack/Bootstrap.svg";
import MaterialUIImage from "../assets/Images/stack/MaterialUI.svg";
import ExpressImage from "../assets/Images/stack/Express.png";
import GitImage from "../assets/Images/stack/Git.svg";
import GithubImage from "../assets/Images/stack/Github.svg";
import GraphqlImage from "../assets/Images/stack/Graphql.svg";
import MongoDBImage from "../assets/Images/stack/MongoDB.svg";
import VercelImage from "../assets/Images/stack/Vercel.svg";
import ChartJsImage from "../assets/Images/stack/ChartJs.svg";
import BashImage from "../assets/Images/stack/Bash.svg";
import DockerImage from "../assets/Images/stack/Docker.svg";
import K8sImage from "../assets/Images/stack/K8s.svg";

export default function Skills() {
  return (
    <section className="skillContainer w-full flex flex-col md:flex-row relative" id="skills">
  <div class="flex flex-col justify-end items-end h-full absolute -bottom-10 md:right-[16%] md:-bottom-10 select-none text-gray-300 font-bold">
    <div class="text-8xl md:text-10xl">Skills</div>
  
</div>

      <div className="leftSkillContainer w-full md:w-[50%]">
        <h2 className="skillHeading">
          <span>M</span>e and <br />MyTech Stack
        </h2>
        <div className="skillSubHeading">
          <p>
            Hi Everyone My name is Ashish Jha I am a Full Stack Web Developer
            I have been working for last 3 Years and Currently I am working
            with a Budding Startup in USA and a full Time Freelancer. Currently
            I am working on NextJs and Making Beautiful UI-UX are my fey
            features
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            doloremque aspernatur, maiores voluptatum minus laudantium?
            Perspiciatis accusamus minima porro dolores necessitatibus, magni
            dolorem et qui veniam nulla sequi molestiae maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quidem quos ullam veritatis voluptates tenetur qui ipsa nulla
            culpa itaque?
          </p>
        </div>
      </div>

      <div className="rightSkillContainer md:w-[50%] flex flex-row">
        <img src={HTMLImage} alt="" className="skillsLogo" />
        <img src={CSSImage} alt="" className="skillsLogo" />
        <img src={JavascriptImage} alt="" className="skillsLogo" />
        <img src={ReactImage} alt="" className="skillsLogo" />
        <img src={NodeJsImage} alt="" className="skillsLogo" />
        <img src={NextImage} alt="" className="skillsLogo" />
        <img src={ReduxImage} alt="" className="skillsLogo" />
        <img src={TailwindImage} alt="" className="skillsLogo" />
        <img src={BootstrapImage} alt="" className="skillsLogo" />
        <img src={MaterialUIImage} alt="" className="skillsLogo" />
        <img src={ExpressImage} alt="" className="skillsLogo" />
        <img src={GitImage} alt="" className="skillsLogo" />
        <img src={GithubImage} alt="" className="skillsLogo" />
        <img src={GraphqlImage} alt="" className="skillsLogo" />
        <img src={MongoDBImage} alt="" className="skillsLogo" />
        <img src={VercelImage} alt="" className="skillsLogo" />
        <img src={ChartJsImage} alt="" className="skillsLogo" />
        <img src={BashImage} alt="" className="skillsLogo" />
        <img src={DockerImage} alt="" className="skillsLogo" />
        <img src={K8sImage} alt="" className="skillsLogo" />
      </div>
    </section>
  );
}
