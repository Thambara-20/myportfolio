import Highlight from './HighLight/HighLight.js'
import './HighLights.css'
import { React, useContext, useEffect } from 'react'
import AOS from 'aos';
import { Projects } from '../../assets/data'
import { Button } from '@mui/material';
import { ThemeContext } from '../Context.js';

const ProjectList = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
       
        <div className='highlights-wrapper' data-aos='fade-up'>
            <div className="bottom-line-wrapper">

                <div classNAme='bottom-line-max'></div>

            </div>

            <div className='p1'>

                <div className='p1-texts'>

                    <h1 className='p1-tittle'>Highlights</h1>
                    <p className='p1-desc'>
                    </p>
                </div>
                <div className="p1-list">
                    {Projects.map((item) => (<Highlight id={item.id} img={item.img} desc={item.desc} />))}

                </div>

            </div>
            <a href="https://thambara-20.github.io/ArtWeb-E/" data-aos='fade-up' style={{ textDecoration: 'none' }}>
                <div style={{ marginBottom: '10px' }} >
                    want to see my web ?
                </div>
                <Button className='web-app-button' style={{ backgroundColor: darkMode ? 'white' : 'grey' ,color: !darkMode ? 'white' : 'black', borderRadius: 50, padding: '10px 40px 10px 40px' }}>
                    See Art Web-E
                </Button>
            </a>


        </div>
    )
}

export default ProjectList