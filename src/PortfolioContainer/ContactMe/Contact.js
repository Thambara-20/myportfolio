import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../Context";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Section, Title } from "../../styles";
import Modal from "react-modal";

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
  background-color: ${(props) =>
    props.disabled
      ? "rgba(0, 31, 109, 0.3)" 
      : "rgba(0, 31, 109, 0.73)"};
  color: ${(props) =>
    props.disabled
      ? "rgba(255, 255, 255, 0.5)"
      : props.darkMode
      ? "#e0e0e0"
      : "#fff"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "rgba(0, 31, 109, 0.3)" // Prevent hover effect when disabled
        : "rgba(0, 102, 255, 0.68)"};
  }
`;


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

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    if (done) {
      setFeedbackMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

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
          setFeedbackMessage("Your message has been sent successfully!");
          setIsSending(false);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage("An error occurred. Please try again.");
          setIsSending(false);
          setShowModal(true);
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
                disabled={isSending}
              >
                {done ? "Send Again" : "Send"}
              </Button>
            </Form>
            <Modal
              isOpen={showModal}
              onRequestClose={closeModal}
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(5px)",
                  zIndex: 1000,
                },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  padding: "2rem",
                  width: "90%",
                  maxWidth: "500px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
                  backgroundColor: darkMode ? "#222" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                },
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",

                    color: done ? "#1E40AF" : "red",
                  }}
                >
                  {done ? "Success!" : "Error"}
                </h2>
                <p style={{ marginBottom: "1.5rem" }}>{feedbackMessage}</p>
                <button
                  onClick={closeModal}
                  style={{
                    padding: "0.5rem 1.5rem",
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: done ? "#2563EB" : "#DC2626", // Modern blue for success, red for error
                    color: "#fff",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  Close
                </button>
              </div>
            </Modal>
          </RightSection>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

export default Contact;
