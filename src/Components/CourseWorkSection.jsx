import React from 'react';
import { useMediaQuery } from '@mui/material';

const Item = ({ children }) => (
  <div className='bg-black text-cyan-300 border border-black p-4 text-center transition-opacity duration-300 hover:opacity-80 hover:scale-110'>
    {children}
  </div>
);

const courses = [
  'Data structure And Algorithm',
  'Design And Analysis Of Algorithm',
  'Database And Management System',
  'Discrete Mathematics',
  'Web Development',
  'Computer Networks',
  'Operating System',
  'Python',
  'Artificial Intelligence',
  'Object Oriented Programming',
  'C',
  'C++'
];

const CourseWorkSection = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <section className='mx-auto max-w-6xl mt-20 flex flex-col items-center'>
      <h2 className='text-5xl font-black text-red-400 text-center mb-10'>Course Details</h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${isSmallScreen ? 'flex-col' : 'flex-row'}`}>
        {courses.map((course, index) => (
          <Item key={index}>{course}</Item>
        ))}
      </div>
    </section>
  );
};

export default CourseWorkSection;
