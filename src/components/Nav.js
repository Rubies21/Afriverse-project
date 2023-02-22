import Logo from '.././assets/AfriLogo.svg'
import "./Nav.css"
import wallet from '../assets/wallet.svg'
import { NavLink } from "react-router-dom";
import grid from '../assets/grid.svg'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'

const Nav = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let activeStyle = {
    fontWeight: '700',
  }; 
  return (
    <nav className='navbar'>
        <div className="container" style={{backgroundColor:`${props.col}`, backgroundImage: `url(${grid})`, backgroundPosition:'center'}}>

          <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>{navbarOpen ? <GrClose/> : <FaBars/>} </button>
            <img src={Logo} alt='The Afriverse logo' className="logo"/>


            <div className="subnav">
                <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                    <li>
                        <NavLink to="/" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>Explore</NavLink>
                    </li>
                    <li>
                    <NavLink to="/create" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>Create Content</NavLink>
                    </li>
                    <li>
                    <NavLink to="/live" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>Live Stream</NavLink>
                    </li>
                </ul>
            

                <button style={{backgroundColor:`${props.col}`}} className="profile">
                  <img src={wallet} size ='44px' style={{padding:'5px 10px 5px 10px'}} className="wallet"/>
                 <span style={{paddingRight:'20px'}} className="span-text"> Wallet address modal</span></button>
            </div>


          
            
        </div>
    </nav>
  )
}

export default Nav