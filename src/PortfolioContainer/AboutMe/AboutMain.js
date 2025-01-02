import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Mobile from "./Mobile";
import Web from "./Web";
import { ThemeContext } from "../Context";

const Section = styled.section`
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background-color: ${(props) => (props.darkMode ? "#282828" : "#ffffff")};
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
`;

const NavItem = styled(motion.div)`
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  color: ${
    (props) =>
      props.active
        ? props.darkMode
          ? "#f1f1f1"
          : "#0056b3" // Bright and cohesive blue for active
        : props.darkMode
        ? "#bbbbbb"
        : "#444444" // Subtle gray for inactive
  };

  background-color: ${(props) =>
    props.active ? (props.darkMode ? "#3b82f6" : "#e7f3ff") : "transparent"};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#3b82f6" : "#e7f3ff")};
    transform: scale(1.1);
  }
`;

const TabContent = styled.div`
  margin-top: 2rem;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AboutMain = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Section darkMode={darkMode}>
      <Container>
        <Title
          darkMode={darkMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          My Projects
        </Title>
        <Navbar darkMode={darkMode}>
          <NavItem
            darkMode={darkMode}
            active={activeTab === "all"}
            onClick={() => handleTabChange("all")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </NavItem>
          <NavItem
            darkMode={darkMode}
            active={activeTab === "mobile"}
            onClick={() => handleTabChange("mobile")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile
          </NavItem>
          <NavItem
            darkMode={darkMode}
            active={activeTab === "web"}
            onClick={() => handleTabChange("web")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </NavItem>
        </Navbar>
        <TabContent
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {activeTab === "all" && (
            <>
              <motion.div variants={item}>
                <Mobile />
              </motion.div>
              <motion.div variants={item}>
                <Web />
              </motion.div>
            </>
          )}
          {activeTab === "mobile" && (
            <motion.div variants={item}>
              <Mobile />
            </motion.div>
          )}
          {activeTab === "web" && (
            <motion.div variants={item}>
              <Web />
            </motion.div>
          )}
        </TabContent>
      </Container>
    </Section>
  );
};

export default AboutMain;
