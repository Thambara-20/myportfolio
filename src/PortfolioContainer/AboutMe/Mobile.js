import "./Mobile.css"
// import mobile from "../../assets/home/mobile-application.avif"
// import Button from 'react-bootstrap/Button';
import{React,useContext} from 'react'
import strpoints_p1 from "../../assets/home/student-849825_1280.jpg"
// import strpoints_p2 from "../../assets/home/projects/Star-Points-2.jpg"
// import strpoints_p3 from "../../assets/home/projects/Star-Points-3.jpg"
import Chip from '@mui/material/Chip';
import { ThemeContext } from '../Context';
import AndroidIcon from '@mui/icons-material/Android';

const Mobile = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div>
            <div className="a">
                <div className="main-image-wrapper" data-aos='fade-up'>
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={strpoints_p1} alt="" className="img-item" />
                        </div> 
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary"  style={{ marginRight: '8px' }} />
                            <AndroidIcon  className="icon-android" fontSize="large" />
                        </div>
                        <div className="project-textline">Library Management System Mobile (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p> The mobile version of The web Application of LBMS, which is also designed to streamline the operations of a library,
                                making it efficient and user-friendly.
                                It serves as a digital platform for library patrons
                                to manage and access library resources. </p>
                        </div>
                    </div>
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={strpoints_p1} alt="" className="img-item" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary"  style={{ marginRight: '8px' }}/>
                            <AndroidIcon  className="icon-android" fontSize="large" />
                        </div>
                        <div className="project-textline">Talk Together (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>This Application is designed to facilitate communication between individuals who speak different languages.
                                Its primary purpose is to break down language barriers
                                and enable users to have meaningful conversations regardless of their native languages. </p>
                        </div>
                    </div>
                    <div className="image-wrapper" >

                        <div className="image-main">
                            <img src={strpoints_p1} alt="" className="img-item" />
                            <AndroidIcon  className="icon-android" fontSize="large" />
                          
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary"  style={{ marginRight: '8px' }}/>
                           
                        </div>
                        <div className="project-textline">Health Pro Simple Application (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>With a user-friendly interface and a wide range of features, Health Pro allows you to access a library of exercises, and calculate your health status using some indicators</p>
                            <p>Start your journey to a healthier you today with Health Pro Simple Application</p>
                        </div>
                        
                    </div>
                    <div className="image-wrapper" >
                        <div className="image-main">
                            <img src={strpoints_p1} alt="" className="img-item" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Chip label="Flutter" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="Dart" color="secondary" style={{ marginRight: '8px' }} />
                            <Chip label="FireBase" color="primary"  style={{ marginRight: '8px' }}/>
                            <AndroidIcon  className="icon-android" fontSize="large" />
                        </div>
                        <div className="project-textline">Star Points Radeem Application (in progress)</div>
                        <div className="intro-box" style ={{ backgroundColor: darkMode ? "#333" : 'white',opacity:'0.9' }}>
                            <p>a cutting-edge project currently in progress. This innovative application is
                                designed to revolutionize the way you redeem your hard-earned rewards and
                                benefits. Whether you've been accumulating points through loyalty programs,
                                credit card rewards, or other incentives, our application is your key to
                                unlocking a world of exciting possibilities. With an intuitive interface and seamless
                                functionality, the Application empowers you to effortlessly redeem your accumulated rewards for a wide range of offerings</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Mobile
