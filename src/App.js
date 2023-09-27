import './App.css';
import Toggle from './PortfolioContainer/Toggle/Toggle';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMain from './PortfolioContainer/AboutMe/AboutMain';
import ProjectList from './PortfolioContainer/HighLights/HighLights';
import Contact from './PortfolioContainer/ContactMe/Contact';
import { useContext } from 'react';
import { ThemeContext } from './PortfolioContainer/Context';
import AOS from 'aos';
import { useEffect, useRef } from 'react';

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

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };

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
      <nav
        style={{
          right:90,
           
          position:'fixed',
          zIndex : '1000',
        }}
      >
        <ul
          style={{
            
            display: 'flex',
            justifyContent: 'flex-end', // Horizontal list
            listStyle: 'none', // Remove the dots
            padding: '12px 15px 15px 15px', // Remove default padding
          }}
        >
          <li
            style={{

              marginRight: '20px', // Add spacing between items
              cursor: 'pointer', // Add cursor style
            }}
            onClick={() => scrollToRef(profileRef)}
          >
            Profile
          </li>
          <li
            style={{
              marginRight: '20px', // Add spacing between items
              cursor: 'pointer', // Add cursor style
            }}
            onClick={() => scrollToRef(aboutRef)}
          >
            About
          </li>
          <li
            style={{
              marginRight: '20px', // Add spacing between items
              cursor: 'pointer', // Add cursor style
            }}

            onClick={() => scrollToRef(projectRef)}
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

      {/* Sections */}
      <section ref={profileRef}>
        <Profile />
      </section>
      <section ref={aboutRef}>
        <AboutMain />
      </section>
      <section ref={projectRef}>
        <ProjectList />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
