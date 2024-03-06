import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const SchoolIcon = () => <i className="fa fa-graduation-cap"></i>; // Example icon component

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
  <VerticalTimeline lineColor={'black'}>
    {educationData.map((item, index) => (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--education"
        dateClassName="text-black" // Apply dateClassName here
        date={item.date}
        iconStyle={{ background: 'red', color: '#fff', scale: '0.4' }} 
        contentStyle={{ background: 'black', color: 'aqua' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">{item.degree}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</section>
  )

}

export default EducationTimeline;
