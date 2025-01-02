import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../Context";
import Chip from "@mui/material/Chip";
import { OpenInNew } from "@mui/icons-material";
import AndroidIcon from "@mui/icons-material/Android";
import strpoints_p1 from "../../assets/mobile/Star-D.png";
import talk from "../../assets/mobile/Talk.png";
import lbms from "../../assets/mobile/LBMS.png";
import health from "../../assets/mobile/health.png";
import { Title } from "../../styles";

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

  img {
    width: 100%;
    height: auto;
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
    cursor: pointer;
    font-size: 1.8rem;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${ProjectCard}:hover & {
      opacity: 1;
    }
  }
`;

const TechChips = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const Mobile = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      title: "Library Management System Mobile",
      img: lbms,
      tech: ["Flutter", "Dart", "Firebase"],
      github:
        "https://github.com/ChadmiRatnayake/Library-Management-System-Mobile",
      description:
        "The mobile version of the LBMS web application. Designed to streamline library operations, making it efficient and user-friendly. A digital platform for library patrons to manage and access library resources.",
    },
    {
      title: "Talk Together (Phase One)",
      img: talk,
      tech: ["Flutter", "Dart", "Firebase"],
      description:
        "An application designed to break down language barriers. Enables users to have meaningful conversations regardless of their native languages, fostering better communication.",
    },
    {
      title: "Health Pro Simple Application",
      img: health,
      tech: ["Flutter", "Dart", "Firebase"],
      description:
        "Health Pro provides a user-friendly interface to access a library of exercises and calculate health status using various indicators. Empowering users to start their journey toward a healthier life.",
    },
    {
      title: "Donate D Points",
      img: strpoints_p1,
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/Thambara-20/Star-D-Points",
      description:
        "An innovative application to redeem rewards and benefits effortlessly. Features an intuitive interface and seamless functionality to manage and utilize accumulated rewards.",
    },
  ];

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
