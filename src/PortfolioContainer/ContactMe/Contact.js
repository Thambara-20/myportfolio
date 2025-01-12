import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../Context";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContactSection, Title, ErrorSpan } from "../../styles";
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

const SubSection = styled(motion.div)`
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
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
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
  // error colors

  &.error {
    border-color: red;
  }

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
  &.error {
    border-color: red;
  }

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
    props.disabled ? "rgba(0, 31, 109, 0.3)" : "rgba(0, 31, 109, 0.73)"};
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

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "user_name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;

      case "user_email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    if (error.length) return error;
  };

  const validateForm = () => {
    const e = !Object.entries(formData).some(([key, value]) => {
      const error = validateField(key, value);
      return error && error.length;
    });
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return;

    if (!validateForm()) return;

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
          setFormData({ user_name: "", user_email: "", message: "" });
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
    <ContactSection
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
          <SubSection
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
              <LocationOnIcon /> Matara, Sri Lanka
            </InfoItem>
          </SubSection>
          <SubSection
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
                value={formData.user_name}
                onChange={handleInputChange}
                className={errors.user_name && "error"}
                error={errors.user_name}
              />
              {errors.user_name && <ErrorSpan>{errors.user_name}</ErrorSpan>}

              <Input
                darkMode={darkMode}
                type="email"
                placeholder="Email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                className={errors.user_email && "error"}
                error={errors.user_email}
              />
              {errors.user_email && <ErrorSpan>{errors.user_email}</ErrorSpan>}

              <TextArea
                darkMode={darkMode}
                rows="5"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message && "error"}
                error={errors.message}
              />
              {errors.message && <ErrorSpan>{errors.message}</ErrorSpan>}

              <Button type="submit" darkMode={darkMode} disabled={isSending}>
                {isSending ? "Sending..." : done ? "Send Again" : "Send"}
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
          </SubSection>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
