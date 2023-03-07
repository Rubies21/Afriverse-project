import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Asidebar from './Aside.module.css'
import padlock from '../../../assets/padlock.svg'
import {BsFillCheckCircleFill} from "react-icons/bs"


const breakDownLinks = [
  {
    name: "Create your first NFT",
    url:"/createNFT"
  },
  {
    name:"Decide what type of NFT to create",
    url:"/decide"
  },
  {
    name:"Understanding what a marketplace is",
    url:"/understanding"
  },
  {
    name:"Setting up your crypto wallet",
    url:"/set-up"
  }
]
const makeNft=[
  {
    name: "Requirements to get started",
    url:"/requirements"
  },
  {
    name:"Decide what type of NFT to create",
    url:"/typeOfNFT"
  },
  {
    name:"Understanding what a marketplace is",
    url:"/what-is-a-marketplace"
  },
  {
    name:"Setting up your crypto wallet",
    url:"/set-up"
  },
  {
    name:"Understanding what a marketplace is",
    url:"/understanding"
  }
]
const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (

    <aside className={Asidebar.container}>
      <p>INTRODUCTION</p>
      <ul>
        <button className={`${Asidebar.btn} ${location.pathname ? Asidebar.activeBtn : ''}`} onClick={()=>{ navigate("/NFTs");}}>
          <li>
          {location.pathname=== "/NFTs" ? <BsFillCheckCircleFill color='#48B7D3'/>:<img src={padlock}/>  }
            
          <span>Wtf is NFT?</span>
          </li>
        </button>
        
      </ul>

      <p>BREAKING IT DOWN</p>
      <ul>
        {breakDownLinks.map((link)=>(
          <button className={`${Asidebar.btn} ${location.pathname ? Asidebar.activeBtn : ''}`} onClick={()=>{ navigate(link.url)}}>
          <li>
            {location.pathname=== link.url ? <BsFillCheckCircleFill color='#48B7D3'/>:<img src={padlock}/>  }
            <span>{link.name}</span>
          </li>
          </button>
        ))}
      </ul>

      <p>MAKE YOUR FIRST NFT</p>
      <ul>
        {
          makeNft.map((make)=>(
            <button className={`${Asidebar.btn} ${location.pathname ? Asidebar.activeBtn : ''}`} onClick={()=>{ navigate(make.url)}}>
              <li>
              {location.pathname=== make.url ? <BsFillCheckCircleFill color='#48B7D3'/>:<img src={padlock}/>  }
                <span>{make.name}</span></li>
            </button>
          ))
        }
      </ul>
    </aside>
  )
}

export default Aside
