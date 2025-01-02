import React, { useState } from "react";
import Mobile from "./Mobile";
import Web from "./Web";
import styled from "styled-components";

const AboutMainContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#0099ff" : "#555")};
  margin-right: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const TabContent = styled.div`
  margin-top: 2rem;
`;

const AboutMain = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default active tab: 'all'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <AboutMainContainer>
      <Title>My Projects</Title>
      <Navbar>
        <NavbarNav>
          <NavItem
            active={activeTab === "all"}
            onClick={() => handleTabChange("all")}
          >
            All
          </NavItem>
          <NavItem
            active={activeTab === "mobile"}
            onClick={() => handleTabChange("mobile")}
          >
            Mobile
          </NavItem>
          <NavItem
            active={activeTab === "web"}
            onClick={() => handleTabChange("web")}
          >
            Web
          </NavItem>
        </NavbarNav>
      </Navbar>
      <TabContent>
        {activeTab === "all" && (
          <>
            <Mobile />
            <Web />
          </>
        )}
        {activeTab === "mobile" && <Mobile />}
        {activeTab === "web" && <Web />}
      </TabContent>
    </AboutMainContainer>
  );
};

export default AboutMain;
