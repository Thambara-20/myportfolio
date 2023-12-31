import {React,useContext} from 'react'
import computer from "../../assets/home/student-849825_1280.jpg"
import "./Aboutweb.css"
import Chip from '@mui/material/Chip';
import { ThemeContext } from '../Context';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import GitHub from '@mui/icons-material/GitHub';
import art from "../../assets/web/Art.png"
import lbms from "../../assets/web/LBMS.png"
import meta from "../../assets/web/Meta.png"

const Web = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div>
            <div className="a">

               
                <div className="main-image-wrapper" data-aos='fade-up'>
                    <div className="image-wrapper" style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',margin:'16px 16px 16px 16px'}} >
                        <div className="image-main">
                            <img src={lbms} alt="" className="img-item" />
                        </div>
                        <div style={{ display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="ReactJS" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Node" color="success" style={{ marginRight: '8px' }} />
                            <Chip label="PostgreSQL" color="primary" style={{ marginRight: '8px' }}/>
                            <Chip label="Express" color="primary" style={{ marginRight: '8px' }}/>
                            <a href="https://github.com/Thambara-20/Library-Management-System-Web">
                            <GitHub  className="icon-github" fontSize="large" />
                            </a>
                            <LaptopWindowsIcon  className="icon-web" fontSize="large" />
                        </div>
                        <div className="project-textline"> Library Management System Web </div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>software solution designed to streamline the operations of a library, 
                                making it efficient and user-friendly. 
                                It serves as a digital platform for librarians and library patrons 
                                to manage and access library resources. </p>
                        </div>
                    </div>
                    <div className="image-wrapper" style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',margin:'16px 16px 16px 16px'}} >
                        <div className="image-main">
                            <img src={art} alt="" className="img-item" />
                            <LaptopWindowsIcon  className="icon-web" fontSize="large" />
                        </div>
                        <div style={{ display: 'flex', width: '98%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="ReactJS" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Node" color="success" style={{ marginRight: '8px' }} />
                            <Chip label="MongoDB" color="primary" style={{ marginRight: '8px' }}/>
                            <Chip label="Express" color="primary" style={{ marginRight: '8px' }}/>
                            <a href="https://github.com/Thambara-20/ArtWeb-E">
                            <GitHub  className="icon-github" fontSize="large" />
                            </a>
                        </div>
                        <div className="project-textline">The Art-Web E (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>Art Selling Web Application is an immersive digital gallery that serves as a premier
                                 destination for art enthusiasts, collectors, and appreciators of paintings and drawings.
                                  It is a virtual space where the world of 
                                visual art comes alive, providing an exclusive platform for artists and buyers to connect,</p>
                        </div>
                    </div>
                    <div className="image-wrapper"style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',margin:'16px 16px 16px 16px'}} >
                        <div className="image-main">
                            <img src={meta} alt="" className="img-item" />
                            <LaptopWindowsIcon  className="icon-web" fontSize="large" />
                        </div>
                        <div style={{ display: 'flex', width: '98%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary" />
                           
                        </div>
                        <div className="project-textline">Meta Exams(in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p> Meta Learning is an innovative online learning platform designed to empower Sri 
                                Lankan citizens with accessible and personalized education. This platform 
                                offers a comprehensive online exams system where students with subscriptions can take exams, 
                                review their results, track their progress, and access a wide range of features including exam search and 
                                recommendations.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Web