import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context";
import Chip from "@mui/material/Chip";
import { OpenInNew } from "@mui/icons-material";
import AndroidIcon from "@mui/icons-material/Android";
import { ProjectCard, ProjectDescription, ProjectGrid, ProjectImageWrapper, ProjectTitle, TechChips, Title } from "../../styles";

const MobileContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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



const Mobile = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.mobile))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MobileContainer darkMode={darkMode}>
      <SectionTitle darkMode={darkMode}>
        <Title darkMode={darkMode}>Mobile Applications</Title>
        <p>
          Explore some of my mobile application projects, showcasing diverse
          functionalities and designs.
        </p>
      </SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} darkMode={darkMode}>
            <ProjectImageWrapper>
              <img src={project.img} alt={project.title} />
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNew className="icon-link" />
                </a>
              )}
            </ProjectImageWrapper>
            <TechChips>
              {project.tech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  color={tech === "Flutter" ? "secondary" : "primary"}
                />
              ))}
              <AndroidIcon fontSize="large" />
            </TechChips>
            <ProjectTitle darkMode={darkMode}>{project.title}</ProjectTitle>
            <ProjectDescription darkMode={darkMode}>
              {project.description}
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </MobileContainer>
  );
};

export default Mobile;
