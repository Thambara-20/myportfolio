import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../Context";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Section, Title } from "../../styles";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ContactWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${(props) => (props.darkMode ? "#1f1f1f" : "#fff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
`;

const RightSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 12px;
  background: ${(props) => (props.darkMode ? "#1f1f1f" : "#fff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#555")};
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 4px 10px rgba(0, 0, 0, 0.7)"
        : "0px 4px 10px rgba(200, 200, 200, 0.7)"};
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Input = styled(motion.input)`
  width: 100%;
  height: 50px;
  border: 1px solid ${(props) => (props.darkMode ? "#333" : "#ccc")};
  border-radius: 12px;
  padding: 0 1rem;
  font-size: 1rem;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 8px rgba(0, 0, 0, 0.5)"
      : "0px 4px 8px rgba(200, 200, 200, 0.5)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 4px 12px rgba(0, 0, 0, 0.7)"
        : "0px 4px 12px rgba(200, 200, 200, 0.7)"};
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  height: 100px;
  border: 1px solid ${(props) => (props.darkMode ? "#333" : "#ccc")};
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#fff")};
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#333")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 8px rgba(0, 0, 0, 0.5)"
      : "0px 4px 8px rgba(200, 200, 200, 0.5)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 4px 12px rgba(0, 0, 0, 0.7)"
        : "0px 4px 12px rgba(200, 200, 200, 0.7)"};
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 12px;
  background-color:rgba(0, 31, 109, 0.73);
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#fff")};
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color:rgba(0, 102, 255, 0.68);
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qnbei69",
        "template_46xh6yb",
        formRef.current,
        "dKlbCt5MRKtv_1-lk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section
      darkMode={darkMode}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Title
          darkMode={darkMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Contact
        </Title>
        <ContactWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <LeftSection
            darkMode={darkMode}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <InfoItem darkMode={darkMode}>
              <PhoneAndroidIcon /> +94 76 6827280
            </InfoItem>
            <InfoItem darkMode={darkMode}>
              <EmailIcon /> thambara.20@cse.mrt.ac.lk
            </InfoItem>
            <InfoItem darkMode={darkMode}>
              <LocationOnIcon /> Hakmana, Matara, Sri Lanka
            </InfoItem>
          </LeftSection>
          <RightSection
            darkMode={darkMode}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                darkMode={darkMode}
                type="text"
                placeholder="Name"
                name="user_name"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Input
                darkMode={darkMode}
                type="text"
                placeholder="Subject"
                name="user_subject"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <Input
                darkMode={darkMode}
                type="email"
                placeholder="Email"
                name="user_email"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <TextArea
                darkMode={darkMode}
                rows="5"
                placeholder="Message"
                name="message"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <Button
                type="submit"
                darkMode={darkMode}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 1 }}
              >
                {done ? "Send Again" : "Send"}
              </Button>
            </Form>
          </RightSection>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

export default Contact;
