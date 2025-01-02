import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../Context";
import { Section, Title } from "../../styles";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#ffffff")};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 4px 10px rgba(0, 0, 0, 0.5)"
      : "0px 4px 10px rgba(200, 200, 200, 0.5)"};
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.darkMode ? "#ffffff" : "#000000")};
    -webkit-mask: url(${(props) => props.icon}) no-repeat center;
    mask: url(${(props) => props.icon}) no-repeat center;
    -webkit-mask-size: contain;
    mask-size: contain;
  }
`;

const SkillName = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${(props) => (props.darkMode ? "#e0e0e0" : "#555")};
`;

const skills = [
  { name: "JavaScript", icon: "icons/javascript.svg" },
  { name: "TypeScript", icon: "icons/typescript.svg" },
  { name: "Python", icon: "icons/python.svg" },
  { name: "Java", icon: "icons/java.svg" },
  { name: "Next.js", icon: "icons/nextjs.svg" },
  { name: "Node.js", icon: "icons/nodejs.svg" },
  { name: "React", icon: "icons/react.svg" },
  { name: "Flutter", icon: "icons/flutter.svg" },
  { name: "Fast API", icon: "icons/fastapi.svg" },
  { name: "Jira", icon: "icons/jira.svg" },
  { name: "Figma", icon: "icons/figma.svg" },
  { name: "PostgreSQL", icon: "icons/postgresql.svg" },
  { name: "MongoDB", icon: "icons/mongodb.svg" },
  { name: "Bootstrap", icon: "icons/bootstrap.svg" },
  { name: "Firebase", icon: "icons/firebase.svg" },
  { name: "GraphQL", icon: "icons/graphql.svg" },
  { name: "HTML", icon: "icons/html5.svg" },
  { name: "CSS", icon: "icons/css.svg" },
  { name: "MySQL", icon: "icons/mysql.svg" },
  { name: "Docker", icon: "icons/docker.svg" },
  { name: "Axios", icon: "icons/axios.svg" },
  { name: "Redux", icon: "icons/redux.svg" },
  { name: "Git", icon: "icons/git.svg" },
  { name: "Stripe", icon: "icons/stripe.svg" },
  { name: "MUI", icon: "icons/mui.svg" },
  { name: "Postman", icon: "icons/postman.svg" },
  { name: "AWS", icon: "icons/aws.svg" },
  { name: "IntelliJ IDEA", icon: "icons/intellijidea.svg" },
  { name: "PyCharm", icon: "icons/pycharm.svg" },
  { name: "Android Studio", icon: "icons/androidstudio.svg" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Section darkMode={darkMode}>
      <Container>
        <Title
          darkMode={darkMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Professional Skills
        </Title>
        <SkillsGrid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              darkMode={darkMode}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconWrapper icon={skill.icon} darkMode={darkMode} />
              <SkillName darkMode={darkMode}>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
}
