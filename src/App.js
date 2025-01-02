import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Toggle from "./PortfolioContainer/Toggle/Toggle";
import Profile from "./PortfolioContainer/Home/Profile";
import AboutMain from "./PortfolioContainer/AboutMe/AboutMain";
import ProjectList from "./PortfolioContainer/HighLights/HighLights";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import { ThemeContext } from "./PortfolioContainer/Context";
import AOS from "aos";
import "aos/dist/aos.css";
import { SkillsSection } from "./PortfolioContainer/Skills/Skills";

const Wrapper = styled.div`
  background-color: ${(props) => (props.darkMode ? "#121212" : "#f9f9f9")};
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  font-family: "Arial", sans-serif;
`;

const NavBar = styled.nav`
  position: fixed;
  top: ${(props) => (props.isNavVisible ? "0" : "-80px")};
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 1rem;
  background-color: ${(props) =>
    props.darkMode ? "rgba(20, 20, 20, 0.9)" : "rgba(255, 255, 255, 0.95)"};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 15px rgba(0, 0, 0, 0.6)"
      : "0px 4px 15px rgba(200, 200, 200, 0.8)"};
  backdrop-filter: blur(12px);
  transition: top 0.5s ease, background-color 0.3s ease;
  z-index: 1000;
`;

const Brand = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => (props.darkMode ? "#66b2ff" : "#0056b3")};
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
`;

const Section = styled.section`
  padding: 0px 20px 50px;
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
  background-color: ${(props) => (props.darkMode ? "#333333" : "#007bff")};
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#555555" : "#0056b3")};
  }
`;

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 300);
    setIsNavVisible(window.scrollY < lastScrollY || window.scrollY < 100);
    setLastScrollY(window.scrollY);
  };

  const handleBackgroundClick = (e) => {
    const nav = document.querySelector("nav");
    if (!nav.contains(e.target)) {
      setIsNavVisible(false);
    }
  };

  const scrollToSection = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleBackgroundClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleBackgroundClick);
    };
  }, [lastScrollY]);

  return (
    <Wrapper darkMode={darkMode}>
      <NavBar isNavVisible={isNavVisible} darkMode={darkMode}>
        <Toggle />
        <Brand darkMode={darkMode}>@TS</Brand>
        <NavItems>
          <NavItem
            darkMode={darkMode}
            onClick={() => scrollToSection(profileRef)}
          >
            Profile
          </NavItem>
          <NavItem
            darkMode={darkMode}
            onClick={() => scrollToSection(aboutRef)}
          >
            Projects
          </NavItem>
          <NavItem
            darkMode={darkMode}
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </NavItem>
        </NavItems>
      </NavBar>

      <ScrollButton
        darkMode={darkMode}
        show={showScrollButton}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </ScrollButton>
      <Section ref={profileRef}>
        <Profile />
      </Section>
      <Section ref={aboutRef}>
        <AboutMain />
        <ProjectList />
        <SkillsSection />
      </Section>
      <Section ref={contactRef}>
        <Contact />
      </Section>
    </Wrapper>
  );
}

export default App;
