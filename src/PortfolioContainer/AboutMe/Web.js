import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context";
import Chip from "@mui/material/Chip";
import { OpenInNew } from "@mui/icons-material";
import { Title } from "../../styles";

const WebContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? "#121212" : "#f9f9f9")};
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  p {
    font-size: 1rem;
    color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  max-width: 90%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 15px rgba(0, 0, 0, 0.7)"
      : "0px 4px 15px rgba(200, 200, 200, 0.7)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 6px 20px rgba(0, 0, 0, 0.9)"
        : "0px 6px 20px rgba(200, 200, 200, 0.9)"};
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px; /* Set a fixed height for uniformity */
    object-fit: cover; /* Ensures images are cropped proportionally */
    border-bottom: ${(props) =>
      props.darkMode ? "1px solid #333333" : "1px solid #eaeaea"};
    transition: transform 0.4s ease-in-out;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.1);
  }

  .icon-link {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
    background-color: ${(props) =>
      props.darkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"};
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
    font-size: 1.8rem;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${ProjectCard}:hover & {
      opacity: 1;
      transform: scale(1.2); /* Add a slight zoom effect */
    }
  }
`;


const TechChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  margin: 0.5rem 0.5rem;
`;

const ProjectDescription = styled.div`
  padding: 1rem;
  font-size: 1rem;
  text-align: justify;
  background-color: ${(props) => (props.darkMode ? "#2b2b2b" : "#f7f7f7")};
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  border-radius: 0 0 12px 12px;
`;

const Web = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("data.json") 
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  return (
    <WebContainer darkMode={darkMode}>
      <SectionTitle darkMode={darkMode}>
        <Title darkMode={darkMode}>Web Projects</Title>
        <p>
          Explore some of my featured projects showcasing my web development
          skills.
        </p>
      </SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} darkMode={darkMode}>
            <ProjectImageWrapper>
              <img src={project.img} alt={project.title} />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <OpenInNew className="icon-link" />
              </a>
            </ProjectImageWrapper>
            <TechChips>
              {project.tech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  color={
                    tech === "ReactJS"
                      ? "secondary"
                      : tech === "Node"
                      ? "success"
                      : "primary"
                  }
                />
              ))}
            </TechChips>
            <ProjectTitle darkMode={darkMode}>{project.title}</ProjectTitle>
            <ProjectDescription darkMode={darkMode}>
              {project.description}
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </WebContainer>
  );
};

export default Web;
