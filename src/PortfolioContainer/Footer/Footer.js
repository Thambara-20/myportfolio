import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';
import background from '../../assets/background.jpg'
import LinkedIn from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import { ThemeContext } from '../Context';
import { useContext } from "react";
const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer" style={{
      background: darkMode
        ? 'linear-gradient(to right, #102634, #1057ff)'
        : 'linear-gradient(to right, #516780, #ebebeb)'
    }}>

      <div className="f-content">
        <span style={{ fontSize: '130%', color: darkMode ? 'white' : 'black' }}>thambarasahassaka@gmail.com</span>
        <div className="f-bottom">
          <span className="f-copy" style={{ fontSize: '130%', color: darkMode ? 'white' : 'black' }}>
            © 2023 Thambara Sahassaka. All rights reserved.
          </span>
        </div>
        <div className="f-icons">
          <a className='linkfooter' style={{ color: darkMode ? 'white' : 'black' }} href="https://www.instagram.com/thambarasahassaka/">
            <InstagramIcon color="white" size={"5rem"} />
          </a>
          <a className='linkfooter' style={{ color: darkMode ? 'white' : 'black' }} href="https://github.com/Thambara-20">
            <GitHubIcon color="white" size={"5rem"} />
          </a>
          <a className='linkfooter' style={{ color: darkMode ? 'white' : 'black' }} href="https://www.linkedin.com/in/thambara-sahassaka-5573701b5">
            <LinkedIn color="white" size={"5rem"} />
          </a>
          <a className='linkfooter' style={{ color: darkMode ? 'white' : 'black' }} href="https://twitter.com/ThambaraS">
            <TwitterIcon color="white" size={"5rem"} />
          </a>
          <a className='linkfooter' style={{ color: darkMode ? 'white' : 'black' }} href="https://www.facebook.com/thambara.sahassaka">
            <Facebook color="white" size={"5rem"} />
          </a>
        </div>
      </div>
      <div className="f-img-wrapper">
        <a href="https://medium.com/@thambarasahassaka" className="f-linkimg" style={{color: darkMode ? 'white' : 'grey' }}>
        <div className='medium-icon'>
          <svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
          </svg>
        Follow me in medium
        </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;