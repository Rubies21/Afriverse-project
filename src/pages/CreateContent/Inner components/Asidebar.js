import React from 'react'
import Asidemodule from './Asidebar.module.css'

const Asidebar = () => {
  return (
    <div className={Asidemodule.container}>
        <h1 className={Asidemodule.header}>PLAN YOUR COURSE</h1>

        <ul className={Asidemodule.options}>
            <li><input type="radio" value="courselanding" name="landing" />Course Landing</li>

            <li><input type="radio" value="coursestructure" name="structure" />Course Structure</li>

            <li><input type="radio" value="coursevideo" name="video" />Course Video Upload</li>
            
        </ul>
       
        <h1 className={Asidemodule.header}>PUBLISH YOUR COURSE</h1>
        <input type="radio" value="review" name="review" />Review

        </div>
  )
}

export default Asidebar
