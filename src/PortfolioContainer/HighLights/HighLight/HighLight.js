import { useContext } from 'react';
import './HighLight.css'
import { ThemeContext } from '../../Context';



const Highlight = ({ img, link, descryption = 'smd,a' }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="p">

      <div className="p-browse" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="descript-box" style={{ backgroundColor: darkMode ? 'white' : 'grey', width: '100%', opacity: 0.8,height:'250px' }}>
          <p className="descript-text" >{descryption}</p>
        </div>


      </div>


      <img src={img} alt="" className="p-img" />


    </div>

  );
};

export default Highlight;
