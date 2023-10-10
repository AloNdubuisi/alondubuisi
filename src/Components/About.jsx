import React from "react";
import profilePic from "../Assets/about-profile-pic.jpg";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const About = () => {
  return (
    // About section starts
    <div name="about" className="z-20 w-full bg-accent max-w-screen-xl sm:w-[100%] py-2">
      <div className="about-container" id="about-container">
        <div className="left-side">
            <div className="profile-text">
                <div className="profile-img">
                    <img className="w-[350px] mx-auto my-4" src={profilePic} alt="/" />
                </div>
                <h2>Alo Ndubuisi<br/></h2>
                <span>Software Engineer | Data Analyst | Instructor</span>
            </div>
            <div className="contact-info">
                <h3 className="contact-title" style={{fontSize:'20px'}}>Contact Info</h3>
                <ul>
                    <li>
                        <span className="icon"><i className="fa-solid fa-phone"></i></span>
                        <span className="text">+2348158573822 | +2348069793621</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                        <span className="text" style={{fontSize:'20px'}}>alo.ndubuisi07@gmail.com</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                        <span className="text">Akure, Lagos, Ebonyi</span>
                    </li>
                </ul>
                <button className='bg-black rounded-md font-medium my-6 w-[250px]
                  md:mx-0 p-2 text-[#00df9a] border border-gray-400 text-[1.6em] sm:mx-auto md:mx-auto'>Download Resume</button>
              </div>
            </div>
            <div className="right-side">
              <div className="about-section">
                <h1 style={{color:'#eecc'}}className="more-about text-4xl inline border-b-4 border-b-4 border-[#00df9a]">ABOUT ME</h1>
                  <p className="text-[1.31em] leading-8 pt-3 my-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;I am Alo Ndubuisi, a graduate of Computer Science with 4+ 
                    years of experience 
                    in developing and building an efficient and scalable 
                    web applications using modern technologies. 
                    I am also good and proficient in writing with 
                    JavaScript, Reactjs, Python, Django and MYSQL, 
                    MYSQLite3 and Postgrel  Database, I can also work 
                    with Data Analysis using Advanced excel tools, 
                    PowerBI and SQL.
                  </p>
                  <p className="text-[1.31em] leading-8 my-2">
                    I have successfully built and deployed 
                    some various projects with my web development skills and as 
                    well built different PowerBI and excel Dashboards which has 
                    made me to contribute meaningfully in DATALAB community. 
                    I have also a good knowledge of Teaching 
                    People web development which has gained me a 
                    Lead Instructor at SABI PROGRAMMERS and as well 
                    ARPTechnologies respectively. 
                  </p>
                  <p className="text-[1.31em] leading-8 my-2">
                    With my  strong foundation in front-end and 
                    back-end technologies, I strive to deliver high-quality 
                    solutions that not only meet but exceed client expectations. 
                    I have a keen eye for detail and a deep understanding of user experience, 
                    which allows me to craft intuitive and aesthetically pleasing web projects. 
                    I am actively open to any fullstack web development role or Data Analysis role 
                    across any sectors either as an Instructor or work on projects.
                  </p>
                  <p className="text-[1.31em] leading-8 my-2">
                    Please Hire me on projects that will challenge me and make me learn more, 
                    meet with new people and as well allow creates some impacts on businesses. 
                    I am ONLY open to REMOTE opportunities and I am also ready to relocate if it is needed.
                  </p>
            </div>
            <div className="flex justify-center items-center py-2 my-5">
              <ul className="flex justify-around">
                <li className="p-4">
                  <a className="font-bold text-4xl hover:text-[#00df9a] rounded duration-300" href="https://www.linkedin.com/in/alo-ndubuisi-465913252/"><FaLinkedin/></a>
                </li>
                <li className="p-4">
                  <a className="font-bold text-4xl hover:text-[#00df9a] rounded duration-300" href="https://www.instagram.com/alo.ndubuisi/"><FaInstagram/></a>
                </li>
                <li className="p-4">
                  <a className="font-bold text-4xl hover:text-[#00df9a] rounded duration-300" href="https://twitter.com/AloNdubuisi01"><FaTwitter /></a>
                </li>
                <li className="p-4">
                  <a className="flex font-bold text-4xl hover:text-[#00df9a] rounded duration-300" href="https://twitter.com/AloNdubuisi01"><FaGithub /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;

