import Logo from '.././assets/AfriLogo.svg'
import Navbar from './Nav.module.css'
import wallet from '../assets/wallet.svg'
import { NavLink } from "react-router-dom";
import grid from '../assets/grid.svg'

const Nav = (props) => {   
  let activeStyle = {
    fontWeight: '700',
  }; 
  return (
    <nav>
        <div className={Navbar.container} style={{backgroundColor:`${props.col}`, backgroundImage: `url(${grid})`, backgroundPosition:'center'}}>
            <img src={Logo} alt='The Afriverse logo'/>

            <div className={Navbar.subnav}>
                <ul>
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
            

                <button style={{backgroundColor:`${props.col}`}}>
                  <img src={wallet} size ='44px' style={{padding:'5px 10px 5px 10px'}}/>
                 <span style={{paddingRight:'20px'}}> Wallet address modal</span></button>
            </div>
        </div>
    </nav>
  )
}

export default Nav