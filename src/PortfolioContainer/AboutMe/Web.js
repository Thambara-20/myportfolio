import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context";
import Chip from "@mui/material/Chip";
import { OpenInNew } from "@mui/icons-material";
import {
  ProjectCard,
  ProjectDescription,
  ProjectGrid,
  ProjectImageWrapper,
  ProjectTitle,
  TechChips,
  Title,
} from "../../styles";

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
                    tech === "React"
                      ? "secondary"
                      : tech === "Node.js"
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
