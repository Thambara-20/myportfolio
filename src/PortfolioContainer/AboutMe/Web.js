import React, { useContext } from 'react'
import computer from "../../assets/home/student-849825_1280.jpg"
import "./Aboutweb.css"

// import Button from 'react-bootstrap/Button';


// import delivery_p1 from "../../assets/home/projects/food-delivery.jpg"
// import delivery_p2 from "../../assets/home/projects/food-delivery2.jpg"
// import delivery_p3 from "../../assets/home/projects/food-delivery3.jpg"
import { ThemeContext } from '../Context';



const Web = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">  <img src={computer} alt="" className="a-computer-img" /></div>
            </div>
            <div className="a-right">
                <p className="a-sub">    <h4 style={{ color: 'green' }}>My web apps developping projects</h4></p>

                <div className="main-img-wrapper">
                    
                    <div className="img-wrapper"  style={{ backgroundColor:  darkMode ? 'rgb(74, 72, 69)':'rgb(239, 239, 239)' }}>
                        <div className="project-text"  >Library management system(in progress)</div>
                        <div className="a-img-main">
                            <div className="a-img-wrapper">
                                {/* <img src={delivery_p1} alt="" className="a-img" />
                                <img src={delivery_p2} alt="" className="a-img" />
                                <img src={delivery_p3} alt="" className="a-img" /> */}
                            </div>
                        </div>
                        {/* <div style={{ marginTop: '10px' }}>     <Button style={{ width: '75px', height: '30px' }} href='https://github.com/Thambara-20/star_points_radeem'>Git</Button></div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Web