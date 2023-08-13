import './App.css';
import Toggle from './PortfolioContainer/Toggle/Toggle';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMain from './PortfolioContainer/AboutMe/AboutMain';
import ProjectList from './PortfolioContainer/HighLights/HighLights';
import Contact from './PortfolioContainer/ContactMe/Contact';
import { useContext} from 'react';
import { ThemeContext } from './PortfolioContainer/Context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 

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
     
    </div>
  );
}
export default App;
