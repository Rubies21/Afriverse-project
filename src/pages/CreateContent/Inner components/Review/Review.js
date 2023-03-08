import React from 'react'
import Reviewmodule from "./Review.module.css"
import angleRight from "../../../../assets/angle-right.svg"
import {SlSocialYoutube} from "react-icons/sl"
import {HiOutlineClock} from "react-icons/hi"
import {AiFillPlayCircle} from "react-icons/ai"
import {AiOutlineCaretDown} from "react-icons/ai"

const data = [
  {
    name: 'Create your first NFT',
    time:'25:04 mins'
  },
  {
    name:'Decide what type of NFT to create',
    time:'10:19 mins'
  },
  {
    name:'Understanding what a marketplace is',
    time:'02:21 mins'
  },
  {
    name:'Setting up your crypto wallet',
    time:'35:16 mins'
  }
]
const Review = () => {
  return (
    <div className={Reviewmodule.container}>
      <ul className={Reviewmodule.navigation}>
            <li ><a href="#" style={{color: 'rgba(31, 31, 31, 0.47)'}}>Create Content</a></li>
            <li><img src={angleRight}/></li>
            <li><a href="#">Publish your course</a></li>
        </ul>
        <p className={Reviewmodule.title}> Beginner's Guide to NFT</p>

        <div className={Reviewmodule.rectangle}>
        <div className={Reviewmodule.subrectangle}>
        </div>
      </div>

      <p className={Reviewmodule.topic}>Course description</p>
        <span className={Reviewmodule.subTopic} style={{color: 'rgba(31, 31, 31, 0.87)'}}>Ever wondered why the whole buzz around Non-Fungible Tokens aka NFT? This course contains all you know about creating, owning and selling your NFT. Get your journey started!</span>

        <p className={Reviewmodule.topic}>Course content</p>

        <div className={Reviewmodule.section}> 
          <span className={Reviewmodule.titlet}> <AiOutlineCaretDown />
          <p>Introduction</p> </span>
          <span className={Reviewmodule.icons}>
            <span className={Reviewmodule.icon}><SlSocialYoutube size={25}/> 2 lectures</span>  

            <span className={Reviewmodule.icon}>
              <HiOutlineClock size={25}/> 15:24 mins
            </span>
         </span> 
        </div>
    

        <div className={Reviewmodule.section}>
        <span className={Reviewmodule.titlet}> <AiOutlineCaretDown />
          <p>Breaking it down</p> </span>
          <span className={Reviewmodule.icons}>
            <span className={Reviewmodule.icon}><SlSocialYoutube size={25}/> 4 lectures</span>  

            <span className={Reviewmodule.icon}>
              <HiOutlineClock size={25}/> 1hr 13mins
            </span>
         </span> 
        </div>

        <ul className={Reviewmodule.accordion}>
            {
              data.map(datum =>(
                <li>
                  <span className={Reviewmodule.left}>
                    <AiFillPlayCircle size={25}/> 
                    <button>
                      <p>{datum.name}</p>
                    </button>
                  </span>
              
                  <span className={Reviewmodule.right}>
                    <HiOutlineClock size={25}/>
                    <p>{datum.time}</p>              
                  </span>  

                          
            </li>
              ))
            }
    
        </ul>

        <div className={Reviewmodule.section}>
        <span className={Reviewmodule.titlet}> <AiOutlineCaretDown />
          <p>Make your first NFT</p> </span>
          <span className={Reviewmodule.icons}>
            <span className={Reviewmodule.icon}><SlSocialYoutube size={25}/> 6 lectures</span>  

            <span className={Reviewmodule.icon}>
              <HiOutlineClock size={25}/> 3hrs 25 mins
            </span>
         </span> 
        </div>
    </div>
  )
}

export default Review
