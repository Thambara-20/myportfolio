import {React,useContext} from 'react'
import computer from "../../assets/home/student-849825_1280.jpg"
import "./Aboutweb.css"
import Chip from '@mui/material/Chip';
import { ThemeContext } from '../Context';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';

const Web = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div>
            <div className="a">

               
                <div className="main-image-wrapper" data-aos='fade-up'>
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={computer} alt="" className="img-item" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="ReactJS" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="NodeJS" color="success" style={{ marginRight: '8px' }} />
                            <Chip label="PostgreSQL" color="primary" style={{ marginRight: '8px' }}/
                            >
                            <Chip label="ExpressJS" color="primary" />
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
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={computer} alt="" className="img-item" />
                            <LaptopWindowsIcon  className="icon-web" fontSize="large" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="ReactJS" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="NodeJS" color="success" style={{ marginRight: '8px' }} />
                            <Chip label="MongoDB" color="primary" style={{ marginRight: '8px' }}/>
                            <Chip label="ExpressJS" color="primary" />
                        </div>
                        <div className="project-textline">The Artist Web (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>Art Selling Web Application is an immersive digital gallery that serves as a premier
                                 destination for art enthusiasts, collectors, and appreciators of paintings and drawings.
                                  It is a virtual space where the world of 
                                visual art comes alive, providing an exclusive platform for artists and buyers to connect,</p>
                        </div>
                    </div>
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={computer} alt="" className="img-item" />
                            <LaptopWindowsIcon  className="icon-web" fontSize="large" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary" />
                        </div>
                        <div className="project-textline">Meta Exams(in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p> Meta Learning is an innovative online learning platform designed to empower Sri 
                                Lankan citizens with accessible and personalized education. This platform, Meta Exams, 
                                offers a comprehensive online exams system where students with subscriptions can take exams, 
                                review their results, track their progress, and access a wide range of features including exam search, 
                                recommendations, subscription gifting, billing history, notifications, offline access, and social integration.
                                 Meta Learning aims to revolutionize education in Sri
                                 Lanka by providing a user-friendly, inclusive, and feature-rich online learning experience.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Web