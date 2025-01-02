import "./App.css";
import Toggle from "./PortfolioContainer/Toggle/Toggle";
import Profile from "./PortfolioContainer/Home/Profile";
import AboutMain from "./PortfolioContainer/AboutMe/AboutMain";
import ProjectList from "./PortfolioContainer/HighLights/HighLights";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import { useContext, useState } from "react";
import { ThemeContext } from "./PortfolioContainer/Context";
import AOS from "aos";
import { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SkillsSection } from "./PortfolioContainer/Skills/Skills";
import { Wrapper } from "./styles";

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
  const contactRef = useRef(null);

  const hideNav = () => {
    setIsNavVisible(false);
  };
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsNavVisible(true); // Show navbar on larger screens
    } else {
      setIsNavVisible(false); // Hide navbar on smaller screens
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <Wrapper
      className="App"
      darkMode={darkMode}
    >
      <Toggle />

      <div
        style={{
          position: "fixed",
          left: 10,
          top: 10,
          width: "3%",
          zIndex: "1000",
          fontWeight: 600,
          fontSize: "100%",
        }}
      >
        {" "}
        @TS
      </div>
      <Button
        style={{
          position: "fixed",
          zIndex: "1005", // Z-index for the button
          right: "50px",
          top: "5px",
          cursor: "pointer",
        }}
        onClick={toggleNav}
      >
        {isNavVisible ? (
          <KeyboardArrowDownIcon
            style={{ color: darkMode ? "grey" : "black" }}
          /> // Material-UI left arrow icon
        ) : (
          <ExpandLessIcon style={{ color: darkMode ? "grey" : "black" }} /> // Material-UI right arrow icon
        )}
      </Button>
      <nav
        style={{
          top: isNavVisible ? "0" : "-70px",
          right: "0",
          position: "fixed",
          zIndex: 900,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          height: "65px",
          transition: "top 0.5s ease",
          backgroundColor: darkMode
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(0, 94, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <ul
          style={{
            zIndex: 1000,
            display: "flex",

            color: darkMode ? "#a9c2d1" : "black",
            justifyContent: "flex-end", // Horizontal list
            listStyle: "none", // Remove the dots
            padding: "12px 105px 15px 1px",
            fontSize: "200", // Remove default padding
          }}
        >
          <li
            style={{
              marginRight: "10px", // Add spacing between items
              cursor: "pointer", // Add cursor style
            }}
            onClick={() => scrollToRef(profileRef)}
          >
            Profile
          </li>
          <li
            style={{
              marginRight: "10px", // Add spacing between items
              cursor: "pointer", // Add cursor style
            }}
            onClick={() => scrollToRef(aboutRef)}
          >
            Projects
          </li>

          <li
            style={{
              cursor: "pointer", // Add cursor style
            }}
            onClick={() => scrollToRef(contactRef)}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div onClick={hideNav}>
        <section ref={profileRef}>
          <Profile />
        </section>
        <section ref={aboutRef}>
          <AboutMain />
          <ProjectList />
        </section>

        <section ref={contactRef}>
          <SkillsSection />
          <Contact />
        </section>
      </div>
    </Wrapper>
  );
}

export default App;
