import React from 'react'
import NFTmodule from './NFTs.module.css'
import angleRight from '../../../assets/angle-right.svg'
import {FaCaretRight} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import {SlSocialYoutube} from "react-icons/sl"
import {HiOutlineClock} from "react-icons/hi"

const NFTs = () => {
  const navigate = useNavigate();
  return (
    <div className={NFTmodule.container}>
      <ul className={NFTmodule.navigation}> 
            <li><button className={NFTmodule.btn} onClick = {()=>(navigate("courses"))} style={{color: 'rgba(31, 31, 31, 0.47)'}}>List of Courses</button></li>
            <li><img src={angleRight}/></li>
            <li><button className={NFTmodule.btn} onClick = {()=>(navigate("/"))}>NFTs</button></li>
            <li><img src={angleRight}/></li>
            <li><button className={NFTmodule.btn} onClick = {()=>(navigate("/NFTs"))}>Beginner's Guide to NFT</button></li>
        </ul>

      <p className={NFTmodule.title}> Wtf is NFT</p>

      <div className={NFTmodule.rectangle}>
        <div className={NFTmodule.subrectangle}>
            <div>
                
                <FaCaretRight color='white' size ="40px"  style={{padding: '5px', backgroundColor:'grey', borderRadius:'50%', position:'absolute', left:'50%', translate:'0% 300%'}}/>
            </div>
            
        </div>
      </div>

      <p className={NFTmodule.about}>Introduction</p>
      <span>This section explains in basic terms all you need to know to get you started on your NFT journey.</span>
      <div className={NFTmodule.extraText}>
       <span ><SlSocialYoutube size={25}/> 2 lectures </span> 
       <span><HiOutlineClock size={25}/> 15:24 mins</span> 
      </div>
       

    </div>

  )
}

export default NFTs
