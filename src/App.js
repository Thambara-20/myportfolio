import './App.css';
import Toggle from './PortfolioContainer/Toggle/Toggle';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMain from './PortfolioContainer/AboutMe/AboutMain';
import ProjectList from './PortfolioContainer/HighLights/HighLights';
import Contact from './PortfolioContainer/ContactMe/Contact';
import { useContext} from 'react';
import { ThemeContext } from './PortfolioContainer/Context';
import AOS from 'aos';
import { useEffect } from 'react';
import ImageList from './test';
function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  

  return (
    <div className="App" style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Profile />
      <AboutMain />
      <ProjectList />
      <Contact />
      <ImageList />
     
    </div>
  );
}
export default App;
