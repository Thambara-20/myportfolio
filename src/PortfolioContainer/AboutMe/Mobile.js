import "./About.css"
import mobile from "../../assets/home/mobile-application.avif"
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react'
import strpoints_p1 from "../../assets/home/projects/Star-points.jpg"
import strpoints_p2 from "../../assets/home/projects/Star-Points-2.jpg"
import strpoints_p3 from "../../assets/home/projects/Star-Points-3.jpg"
// import delivery_p1 from "../../assets/home/projects/food-delivery.jpg"
// import delivery_p2 from "../../assets/home/projects/food-delivery2.jpg"
// import delivery_p3 from "../../assets/home/projects/food-delivery3.jpg"
import { ThemeContext } from "../Context";

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">  <img src={mobile} alt="" className="a-mobile-img" /></div>
                </div>
                <div className="a-right">
                    <p className="a-sub">    <h4 style={{ color: 'green' }}>My mobile apps developping projects</h4></p>

                    <div className="main-img-wrapper">
                        <div className="img-wrapper"  style={{ backgroundColor:  darkMode ? 'rgb(74, 72, 69)':'rgb(239, 239, 239)' }}>
                            <div className="project-text"> Star Points radeem application(in progress)</div>
                            <div className="a-img-main">
                                <div className="a-img-wrapper">
                                    <img src={strpoints_p1} alt="" className="a-img" />
                                    <img src={strpoints_p2} alt="" className="a-img" />
                                    <img src={strpoints_p3} alt="" className="a-img" />
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }}> <Button style={{ width: '75px', height: '30px' }} href='https://github.com/Thambara-20/star_points_radeem'>Git</Button> </div>
                        </div>
                        <div className="img-wrapper" style={{ backgroundColor:  darkMode ? 'rgb(74, 72, 69)':'rgb(239, 239, 239)' }}>
                            <div className="project-text"  >Food Delivery application(in progress)</div>
                            <div className="a-img-main">
                                <div className="a-img-wrapper">
                                    {/* <img src={delivery_p1} alt="" className="a-img" />
                                    <img src={delivery_p2} alt="" className="a-img" />
                                    <img src={delivery_p3} alt="" className="a-img" /> */}
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }}>     <Button style={{ width: '75px', height: '30px' }} href='https://github.com/Thambara-20/star_points_radeem'>Git</Button></div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default About
