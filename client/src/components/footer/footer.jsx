import React from "react";
import {SiGithub,SiCodechef,SiCodeforces,SiLinkedin} from 'react-icons/si'
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="infoText">
                    I'm Chovan Netam, an IT undergraduate with a strong background in C/C++ and web development (HTML, CSS, JavaScript, React, NodeJS). I'm passionate about coding and have worked on projects like UNWIND and DRUMSET. You can find me on platforms like Coding Ninjas, GeeksForGeeks, LeetCode, and HackerRank to explore my coding journey. Connect with me on LinkedIn for more.
                </div>
                  
                <div className="socialIcons">
                    <span className="icon">
                        <SiGithub />
                    </span>
                    <span className="icon">
                        <SiLinkedin />
                    </span>
                    <span className="icon">
                        <SiCodeforces />
                    </span>
                    <span className="icon">
                        <SiCodechef />
                    </span>
                </div>
        </footer>
    );
};

export default Footer;
