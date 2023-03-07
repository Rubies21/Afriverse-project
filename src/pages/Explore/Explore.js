import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import "./Explore.css"
import { Outlet } from 'react-router-dom'


const Explore = () => {
  return (
    <div>
      <Nav col='#EAF7FA'/>
      <div className = "Expcontainer">
        <Aside/>
        <Outlet/>
        
      </div>
      <Footer progress='Not Completed' buttonName = 'Start Course' status = 'none'/>
      
    </div>
  )
}

export default Explore
