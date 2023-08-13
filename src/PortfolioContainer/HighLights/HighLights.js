import Project from './HighLight/HighLight.js'
import './HighLights.css'
import React from 'react'
import {Projects} from '../../assets/data'

const ProjectList = () => {
    return (
        <div className='p1'>
            <div className='p1-texts'>
                
                <h1 className='p1-tittle'>Highlights</h1>
                <p className='p1-desc'>
                </p>
            </div>
            <div className="p1-list">
                {Projects.map((item)=>(<Project id = {item.id} img = {item.img} link = {item.link}/>))}
               
            </div>

        </div>
    )
}

export default ProjectList