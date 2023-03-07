import React from 'react'
import { useState } from 'react'
import Mainmodule from './Main.module.css'
import angleRight from '../../../assets/angle-right.svg'
import {FaCaretRight} from "react-icons/fa"
import Clock from '../../../assets/clock.svg'
import stars from '../../../assets/stars.svg'
import { useNavigate } from 'react-router-dom'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 97) : text}
        <span onClick={toggleReadMore} className={Mainmodule.readtext}>
          {isReadMore ? "...Read more" : "...Read less"}
        </span>
      </p>
    );
  };

const Main = () => {
  const navigate = useNavigate();
  return (
    <main>
        <ul className={Mainmodule.navigation}> 
            <li><button className={Mainmodule.btn} onClick = {()=>(navigate("courses"))} style={{color: 'rgba(31, 31, 31, 0.47)'}}>List of Courses</button></li>
            <li><img src={angleRight}/></li>
            <li><button className={Mainmodule.btn} onClick = {()=>(navigate("/"))}>NFTs</button></li>
        </ul>

      <p className={Mainmodule.title}> Beginner's Guide to NFT</p>

      <div className={Mainmodule.rectangle}>
        <div className={Mainmodule.subrectangle}>
            <div className={Mainmodule.icon}>
                
                <FaCaretRight color='white' size ="40px"  style={{padding: '5px', backgroundColor:'grey', borderRadius:'50%', position:'absolute', left:'50%', translate:'0% 300%'}}/>
            </div>
            
        </div>
      </div>

      <p className={Mainmodule.about}>About this course</p>
      <ReadMore>
      Ever wondered why the whole buzz around Non-Fungible 
Tokens aka NFT? This course contains all you. Lorem ipsum dot dot dor otnelf erfnm koir hoel
      </ReadMore>

        <div className={Mainmodule.rating}>
            <div className={Mainmodule.subRating}>
                <img src={Clock} style={{paddingRight:'10px'}}/>
                <span style={{paddingRight:'20px'}}>15hrs</span>
                <img src={stars} style={{paddingRight:'5px'}}/>
                <span className={Mainmodule.learners}>(12 learners) </span>
            </div>
            <button className={Mainmodule.claim}>Claim 20 AFET</button>
        </div>
        
        
        
    </main>
  )
}

export default Main
