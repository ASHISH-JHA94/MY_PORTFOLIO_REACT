import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Education from './Components/Education'
import ProjectsSection from './Components/ProjectSection'
import Skills from './Components/Skills'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import CourseWorkSection from './Components/CourseWorkSection'
import ResumeButton from './Components/ResumeButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen overflow-y-auto overflow-x-hidden overscroll-contain flex flex-col'>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      
      <Education></Education>
      <CourseWorkSection></CourseWorkSection>
      <ProjectsSection></ProjectsSection>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>

    

      
    
  )
}

export default App
