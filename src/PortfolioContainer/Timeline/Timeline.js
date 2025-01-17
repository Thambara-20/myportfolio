import React from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../Context";
import { MDBIcon } from "mdb-react-ui-kit";
import { Title } from "../../styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  animation: ${fadeIn} 1s ease-in-out;

    @media (max-width: 768px) {

    padding: 3rem 0.2rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-left: 4px solid ${(props) => (props.darkMode ? "#4da6ff" : "#0056b3")};
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
  border-radius: 8px;
  position: relative;
  transition: transform 0.2s ease-in-out, scale 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease in-out;
    scale: 1.02;
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.darkMode ? "#66b2ff" : "#0056b3")};
`;

const Organization = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};

  .icon {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: ${(props) => (props.darkMode ? "#4da6ff" : "#0056b3")};
  }
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: ${(props) => (props.darkMode ? "#999999" : "#777777")};
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
`;

const Career = () => {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [careerData, setCareerData] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCareerData(data.career))
      .catch((error) => console.error("Error fetching career data:", error));
  }, []);
  return (
    <CareerWrapper darkMode={darkMode}>
      <Title darkMode={darkMode}>Experience</Title>
      <Timeline>
        {careerData.map((item, index) => (
          <TimelineItem key={index} darkMode={darkMode}>
            <RoleTitle darkMode={darkMode}>{item.role}</RoleTitle>
            <Organization darkMode={darkMode}>
              <MDBIcon fas icon="building" className="icon" />
              {item.organization}
            </Organization>
            <Duration darkMode={darkMode}>
              {item.duration} - {item.location}
            </Duration>
            <Description darkMode={darkMode}>{item.description}</Description>
          </TimelineItem>
        ))}
      </Timeline>
    </CareerWrapper>
  );
};

export default Career;
