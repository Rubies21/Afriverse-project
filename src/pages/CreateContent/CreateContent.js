import React from 'react'
import Asidemodule from './Inner components/Asidebar.module.css'
import Nav from "../../components/Nav"
import { Outlet } from "react-router-dom"
import Footer from '../../components/Footer'

import CreateModule from "./CreateContent.module.css"

const CreateContent = () => {
  return (
    <div className={CreateModule.wholeContainer}>
      <Nav col='#FCE9EB'/>
      <div className={CreateModule.container}>
      <div className={Asidemodule.container}>
        <h1 className={Asidemodule.header}>PLAN YOUR COURSE</h1>

        <ul className={Asidemodule.options}>
            <li><input type="radio" value="courselanding" name="landing" data-toggle-value="landing" style={{backgroundColor:'yellow'}}/>Course Landing</li>

            <li><input type="radio" value="coursestructure" name="structure" />Course Structure</li>

            <li><input type="radio" value="coursevideo" name="video" />Course Video Upload</li>
            
        </ul>
       
        <h1 className={Asidemodule.header}>PUBLISH YOUR COURSE</h1>
        <input type="radio" value="review" name="review" />Review

        </div>
        <Outlet/>
        </div>
        <Footer progress='10%' buttonName='Save Progress' /> 
        
    </div>
    
  )
}

export default CreateContent
