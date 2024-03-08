import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationTimeline = () => {
  // Sample constant data for educational timeline
  const educationData = [
    {
      date: "2015 - 2019",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of XYZ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "2019 - 2021",
      degree: "Master of Science in Information Technology",
      institution: "ABC College",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more educational entries as needed
  ];

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-[#e7e7e7]">
      <legend className="text-5xl font-black text-red-400">Education</legend>
      <VerticalTimeline lineColor={'#4b5563'}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            dateClassName="text-black text-sm font-medium" // Apply dateClassName here
            date={item.date}
            iconStyle={{ background: '#4b5563', color: '#fff', scale: 0.4 }}
            contentStyle={{ background: 'black', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', color: '#fff', textColor: 'cyan-300' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-2xl font-semibold mb-2 text-cyan-300">{item.degree}</h3>
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
  )

}

export default EducationTimeline;