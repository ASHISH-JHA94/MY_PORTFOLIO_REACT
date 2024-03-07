import dots from "../assets/Images/userAsset/dots.png";
import cube from "../assets/Images/userAsset/cube.png";
import circle from "../assets/Images/userAsset/circle.png";
import zigzags from "../assets/Images/userAsset/zigzags.png";
import plus from "../assets/Images/userAsset/plus.png";
import myimage from "../assets/Images/userAsset/myimage.png";
import React, { useEffect } from 'react';
import Typed from 'typed.js';

import ContactIcon from "./ContactIcon";
import ResumeButton from "./ResumeButton";




export default function HeroSection(){

    useEffect(() => {
        // Initialize Typed.js
        var typeData = new Typed(".role", {
          strings: [
            "Full Stack Developer>",
            "Web Developer>",
            "UI-UX Designer>",
            "Backend Developer>",
            "Comptetive programmer>",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
        });
    
        
    
        // Cleanup function to destroy Typed instance when component unmounts
        return () => {
          typeData.destroy();
        };
      }, []);
    return (
      
        
    <section className="heroSection flex flex-col md:flex-row justify-center items-center relative w-full max-w-7xl mx-auto px-4 pb-8 gap-x-20">
      
      <div className="infoContainer">
        <div className="heading">Hi! Ashish Jha</div>
        <div className="heading subHeading">
          I am a <span className="role"></span>
        </div>
        <p className="desc md:text-2xl text-xl md:max-w-[70%] max-w-[100%]">
          I’m a software developer and Comptetive Programmer here is my portfolio website. Here
          you’ll learn about my journey as a software developer.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="btn">
          <a href="#contactMe">Hire Me</a>
        </div>
        <ContactIcon></ContactIcon>
        </div>
        <ResumeButton></ResumeButton>
        
        

      </div>
      <div className="imgContainer">
        <div className="absolute icons iconDots">
          <img src={dots} alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={cube} alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={circle} alt="" />
        </div>
        <div className="absolute icons iconZigZag">
          <img src={zigzags} alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={plus} alt="" />
        </div>
        <div className="">
          <div className="userImage">
            
            <img src={myimage} alt="My Image" />
          </div>
        </div>
      </div>
      
    </section>
   
    )
}