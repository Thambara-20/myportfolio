import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMain from './PortfolioContainer/AboutMe/AboutMain';

function App() {

 

  return (
    <div className="App" style={{
      backgroundColor:  "black",
      color: "white",
    }}>
      
      <Profile />
      <AboutMain />
   
     
    </div>
  );
}
export default App;
