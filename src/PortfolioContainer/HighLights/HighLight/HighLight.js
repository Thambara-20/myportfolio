import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const HighlightContainer = styled(motion.div)`
  width: 100%;
  max-width: 380px;
  margin: 20px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 6px 15px rgba(0, 0, 0, 0.7)"
        : "0px 6px 15px rgba(200, 200, 200, 0.7)"};
    cursor: pointer;
  }

  @media screen and (max-width: 821px) {
    max-width: 90%;
    margin: 10px auto;
  }
`;

const BrowserBar = styled.div`
  height: 24px;
  background-color: ${(props) => (props.darkMode ? "#000000" : "#f5f5f5")};
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.darkMode ? "#666666" : "#cccccc")};
  margin-right: 8px;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  opacity: 0.8;
  img {
    width: 100%;
    height: 350px;
    transition: transform 0.3s ease;
    ${HighlightContainer}:hover & {
      transform: scale(1.1);
    }
  }
`;

const DescriptionBox = styled.div`
  background-color: ${(props) => (props.darkMode ? "#333333" : "#f7f7f7")};
  padding: 1rem;
  opacity: 0.8;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
  font-weight: bold;
`;

const Highlight = ({ img, desc = "Description goes here.", link = null }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const Wrapper = link
    ? styled.a`
        text-decoration: none;
        color: inherit;
      `
    : styled.div``;

  return (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer">
      <HighlightContainer
        darkMode={darkMode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BrowserBar darkMode={darkMode}>
          <Circle darkMode={darkMode} />
          <Circle darkMode={darkMode} />
          <Circle darkMode={darkMode} />
        </BrowserBar>
        <ImageWrapper>
          <img src={img} alt="Highlight" />
        </ImageWrapper>
        <DescriptionBox darkMode={darkMode}>{desc}</DescriptionBox>
      </HighlightContainer>
    </Wrapper>
  );
};

export default Highlight;
