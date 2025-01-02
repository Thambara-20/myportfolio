import { motion } from 'framer-motion';
import styled from 'styled-components';


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

export const Wrapper = styled(motion.div)`
  text-align: center;
  color: ${(props) => (props.darkMode ? "white" : "#333")};
  background: ${(props) =>
    props.darkMode
      ? "linear-gradient(145deg, #121212, #1e1e1e)"
      : "linear-gradient(145deg, #f9f9f9, #ffffff)"};`


