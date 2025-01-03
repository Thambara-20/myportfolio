import React from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../Context";

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

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.darkMode ? "#181818" : "#f4f4f4")};
  color: ${(props) => (props.darkMode ? "#ffffff" : "#333333")};
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  min-height: 90vh;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${(props) => (props.darkMode ? "#4da6ff" : "#0056b3")};
`;

const HighlightedText = styled.span`
  color: ${(props) => (props.darkMode ? "#66b2ff" : "#0056b3")};
`;

const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#555555")};
  text-decoration: none !important;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  margin: 1.5rem 0;
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.7rem;
    border-radius: 50%;
    display: inline-flex;
    min-width: 40px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.facebook {
      background-color: #3b5998;
      color: white;
    }

    &.twitter {
      background-color: #55acee;
      color: white;
    }

    &.instagram {
      background-color: #ac2bac;
      color: white;
    }

    &.linkedin {
      background-color: #0082ca;
      color: white;
    }
  }
`;

const ProfilePictureWrapper = styled.div`
  flex: 1;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
  overflow: hidden;
  background-image: url("profile.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.6;
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    display: flex;
    flex: 3;
    clip-path: none;
    height: 100%;
    width: 100%;
    background-size: fill;
    margin-top: 0rem;
  }
`;

const Profile = () => {
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <ProfileWrapper darkMode={darkMode}>
      <ProfileContainer>
        <ProfileInfo>
          <SocialLinks>
            <a
              href="https://www.facebook.com/thambara.sahassaka"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/ThambaraS"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/thambarasahassaka/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/thambara-sahassaka-5573701b5"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </SocialLinks>
          <Name darkMode={darkMode}>
            Hello, I'M{" "}
            <HighlightedText darkMode={darkMode}>
              Thambara Sahassaka
            </HighlightedText>
          </Name>
          <Description darkMode={darkMode}>
            I am an undergraduate student of computer science and engineering at
            University of Moratuwa. Passionate about application development,
            problem-solving, and designing, with experience in mobile and web
            application development. Currently, I work at{" "}
            <a
              href="https://www.fcodeLabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0056b3" }}
            >
              Fcode Labs Pvt Ltd
            </a>{" "}
            as an Associate Software Engineer.
          </Description>
        </ProfileInfo>
        <ProfilePictureWrapper />
      </ProfileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
