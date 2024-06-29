import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationTimeline = () => {
  const educationData = [
    {
      date: "2022-2026",
      degree: "Bachelor of Technology in Computer Science",
      institution: "NIT SURAT",
      description: "Currently in 2nd year, exploring fields in Computer Science with CGPA-9.08.",
    },
    {
      date: "2018-2022",
      degree: "10th and 12th",
      institution: "Rps Public School",
      description: "Completed 10th with 95.6% and 12th with 93.2%. Secured AIR-8722 in JEE-Mains and AIR-8789 in JEE-Advance.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-[#e7e7e7]">
      <legend className="text-5xl font-black text-red-400">Education</legend>
      <VerticalTimeline lineColor={'#4b5563'}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={<span className="text-white md:text-black text-xl font-bold">{item.date}</span>}
            iconStyle={{ background: '#4b5563', color: '#fff' }}
            contentStyle={{ background: 'black', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.degree}</h3>
            <h4 className="text-lg font-medium mb-2 text-cyan-300">{item.institution}</h4>
            <p className="text-gray-300">{item.description}</p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-1 w-full bg-white"></div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default EducationTimeline;
