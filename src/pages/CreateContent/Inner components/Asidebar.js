import React from 'react'
import Asidemodule from './Asidebar.module.css'
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BsCircle} from "react-icons/bs"

const btnLinks = [
    {
      title: "Course Landing",
      url: "/create"
    },
    {
      title: "Course Structure",
      url: "/course-structure"
    },
    {
      title: "Course Video Upload",
      url: "/video-upload"
    }
  ]
const Asidebar = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const navigate = useNavigate();
    const location = useLocation();
  
    React.useEffect(()=>{
      const activePath = location.pathname;
      const currentIndex = btnLinks.findIndex( btn => btn.url === activePath )
      if(currentIndex > -1) {
        setActiveIndex(currentIndex);
      }
    }, [location.pathname])
  return (

      <div className={Asidemodule.container}>
          <h1 className={Asidemodule.header}>PLAN YOUR COURSE</h1>

          <ul className={Asidemodule.options}>

            {btnLinks.map((btn, index) => (
              <button onClick={() => {
                navigate(btn.url);
              }} className={`${Asidemodule.btn} ${(location.pathname === btn.url || index <= activeIndex) ? Asidemodule.btnActive : ''}`}><li><span className={Asidemodule.circle}>
                {(location.pathname === btn.url || index <= activeIndex) ? <AiOutlineCheckCircle /> : <BsCircle/>}
                </span><span>{btn.title}</span></li></button>
            ))}
          </ul>

          <h1 className={Asidemodule.header}>PUBLISH YOUR COURSE</h1>
          <input type="radio" value="review" name="review" />Review

        </div>
  )
}

export default Asidebar
