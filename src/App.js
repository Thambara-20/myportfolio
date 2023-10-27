import './App.css';
import Toggle from './PortfolioContainer/Toggle/Toggle';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMain from './PortfolioContainer/AboutMe/AboutMain';
import ProjectList from './PortfolioContainer/HighLights/HighLights';
import Contact from './PortfolioContainer/ContactMe/Contact';
import { useContext, useState } from 'react';
import { ThemeContext } from './PortfolioContainer/Context';
import AOS from 'aos';
import { useEffect, useRef } from 'react';
import Footer from './PortfolioContainer/Footer/Footer';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);



  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const hideNav = () => {

    setIsNavVisible(false);
  };
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };

  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the navbar visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Check the screen width and set initial visibility
  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsNavVisible(true); // Show navbar on larger screens
    } else {
      setIsNavVisible(false); // Hide navbar on smaller screens
    }
  };

  // Listen for window resize events
  useEffect(() => {
    checkScreenWidth(); // Set initial visibility
    // Hide navigation bar after 3 seconds
    // Add event listener to update visibility on window resize
    window.addEventListener('resize', checkScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div
      className="App"

      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode && 'white',


        // Add this style for positioning
      }}

    >
      <Toggle />
      {/* Navigation bar */}

      <div style={{ position: 'fixed', left: 10, top: 10, width: '3%', zIndex: '1000', fontWeight: 600, fontSize:'100%' }}> @TS</div>
      <Button
        style={{

          position: 'fixed',
          zIndex: '1005', // Z-index for the button
          right: '50px',
          top: '5px',
          cursor: 'pointer',

        }}
        onClick={toggleNav}
      >
        {isNavVisible ? (
          <KeyboardArrowDownIcon style={{ color: darkMode ? 'grey' : 'black' }} /> // Material-UI left arrow icon
        ) : (
          <ExpandLessIcon style={{ color: darkMode ? 'grey' : 'black' }} /> // Material-UI right arrow icon
        )}
      </Button>
      <nav
        style={{
          top: isNavVisible ? '0' : '-70px',
          right: '0',
          position: 'fixed',
          zIndex: 900,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          height: '65px',
          transition: 'top 0.5s ease',
          backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 94, 255, 0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Your nav content here */}
      


      {/* Add a button to toggle the menu */}

      <ul
        style={{
          zIndex: 1000,
          display: 'flex',
       
          color: darkMode ? '#a9c2d1' : 'black',
          justifyContent: 'flex-end', // Horizontal list
          listStyle: 'none', // Remove the dots
          padding: '12px 105px 15px 1px',
          fontSize: '200', // Remove default padding
        }}
      >
        <li
          style={{
            marginRight: '10px', // Add spacing between items
            cursor: 'pointer', // Add cursor style
          }}
          onClick={() => scrollToRef(profileRef)}
        >
          Profile
        </li>
        <li
          style={{
            marginRight: '10px', // Add spacing between items
            cursor: 'pointer', // Add cursor style
          }}
          onClick={() => scrollToRef(aboutRef)}
        >
          Projects
        </li>

        <li
          style={{
            cursor: 'pointer', // Add cursor style
          }}
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </li>
      </ul>
    </nav>

      {/* Sections */ }
  <div onClick={hideNav}>

    <section ref={profileRef}>
      <Profile />
    </section>
    <section ref={aboutRef}>
      <AboutMain />
      <ProjectList />
    </section>

    <section ref={contactRef}>
      <Contact />
      <Footer />
    </section>

  </div>
    </div >
  );
}

export default App;
