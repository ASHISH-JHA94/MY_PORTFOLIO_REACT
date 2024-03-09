import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex justify-center relative">
            <div className="footerFadedText d-none d-md-block text-3xl md:text-7xl md:absolute md:left-0 ">Ashish Jha</div>
          </div>
          <div className="mb-10 flex justify-center">
            <div className="flex space-x-10">
              <div className="linkContainer">
                <a href="#projects" className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              </div>
              <div className="linkContainer">
                <a href="#skills" className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
              </div>
              <div className="linkContainer">
                <a href="#contactMe" className="text-xl text-gray-300 hover:text-white transition-colors duration-300">Contact Me</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="iconContainer mb-24 md:mb-0">
              <a href="https://www.linkedin.com/in/ashish-jha-25854b256/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon text-white text-3xl mr-5 hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="ttps://github.com/ASHISH-JHA94" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon text-white text-3xl mr-5 hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="icon text-white text-3xl mr-5 hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/ashishjha94023/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon text-white text-3xl hover:text-gray-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }