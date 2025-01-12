import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => (props.darkMode ? "white" : "#333")};
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Section = styled(motion.section)`
  padding: 4rem 1rem;
  color: ${(props) => (props.darkMode ? "white" : "#333")};
  overflow: hidden;
  position: relative;
`;
export const ContactSection = styled(motion.section)`
  padding: 4rem 1rem;
  color: ${(props) => (props.darkMode ? "white" : "#333")};
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ProjectCard = styled.div`
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

export const ProjectImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px; /* Ensures uniform height */
    object-fit: cover; /* Crops the image proportionally */
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
      transform: scale(1.2); /* Adds a zoom effect for better interaction */
    }
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  margin: 0.5rem 0.5rem;
`;

export const ProjectDescription = styled.div`
  padding: 1rem;
  font-size: 1rem;
  text-align: justify;
  background-color: ${(props) => (props.darkMode ? "#2b2b2b" : "#f7f7f7")};
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  border-radius: 0 0 12px 12px;
`;

export const ProjectGrid = styled.div`
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

export const TechChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
`;

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.1rem;
  display: block;
`;
