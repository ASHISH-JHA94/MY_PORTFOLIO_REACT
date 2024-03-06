export default function Footer(){
    return(
        <footer>
            <div className="container footerContainer">
                <div className="footerFadedText">John Doe</div>
                <div className="linkContainer">
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#skills">Skills</a>
                </div>
                <div>
                    <a href="#contactMe">Contact Me</a>
                </div>
                </div>
                <div className="iconContainer">
                <i className="fa-brands fa-linkedin icon"></i>
                <i className="fa-brands fa-github icon"></i>
                <i className="fa-brands fa-twitter icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
                <i className="fa-regular fa-envelope icon"></i>
                </div>
            </div>
       </footer>
    )
    
}