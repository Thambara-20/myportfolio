import Highlight from "./HighLight/HighLight.js";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Projects } from "../../assets/data";
import { ThemeContext } from "../Context.js";
import { Title } from "../../styles.js";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BottomLineWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: ${(props) => (props.darkMode ? "#444" : "#ddd")};
  margin-bottom: 2rem;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  p {
    font-size: 1rem;
    color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  }
`;

const HighlightsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Wrapper data-aos="fade-up">
      <BottomLineWrapper darkMode={darkMode} />
      <TitleSection darkMode={darkMode}>
        <Title darkMode={darkMode}>Highlights</Title>
        <p>A showcase of some of the most exciting achievements.</p>
      </TitleSection>
      <HighlightsGrid>
        {Projects.map((item) => (
          <Highlight key={item.id} img={item.img} desc={item.desc} />
        ))}
      </HighlightsGrid>
    </Wrapper>
  );
};

export default ProjectList;
