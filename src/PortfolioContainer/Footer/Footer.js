import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';
import background from '../../assets/background.jpg'
const Footer = () => {

  return (
    <div className="footer">
     
      <div className="f-content">
        <span>thambarasahassaka@gmail.com</span>
        <div className="f-icons">
          <InstagramIcon color="white" size={"3rem"} />
          <FacebookIcon color="white" size={"3rem"} />
          <GitHubIcon color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;