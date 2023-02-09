import React from 'react'
import Footermodule from './Footer.module.css'
import { useState } from 'react'

const Footer = (props) => {

  return (
    <footer>
        <div className={Footermodule.subFooter}>
            <p style={{fontSize: '14px'}}>% COMPLETED</p>
            <p style={{fontSize: '26px', color:'rgba(31, 31, 31, 0.67)', paddingTop:'10px'}}>{props.progress}</p>
        </div>

        <div className={Footermodule.buttons}>

          <div style={{paddingRight:'10px'}}>
            <button className={Footermodule.back} style={{display:`${props.status}`}}>Back</button>
          </div>
          
          
          <button className={Footermodule.action}>{props.buttonName}</button>
        </div>
        
        
        

    </footer>
  )
}

export default Footer
