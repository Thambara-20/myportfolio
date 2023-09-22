import Highlight from './HighLight/HighLight.js'
import './HighLights.css'
import {React,useEffect} from 'react'
import AOS from'aos';
import {Projects} from '../../assets/data'

const ProjectList = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,
        });
      }, []);
    return (
    <div className='highlights-wrapper' data-aos='fade-up'>
        <div className="bottom-line-wrapper">
          
           <div classNAme= 'bottom-line-max'></div>

        </div>
    
        <div className='p1'>

            <div className='p1-texts'>
                
                <h1 className='p1-tittle'>Highlights</h1>
                <p className='p1-desc'>
                </p>
            </div>
            <div className="p1-list">
                {Projects.map((item)=>(<Highlight id = {item.id} img = {item.img} link = {item.link}/>))}
               
            </div>

        </div>
    </div>
    )
}

export default ProjectList