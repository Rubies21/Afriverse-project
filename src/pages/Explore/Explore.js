import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import "./Explore.css"


const Explore = () => {
  return (
    <div>
      <Nav col='#EAF7FA'/>
      <div className = "Expcontainer">
        <Aside/>
        <Main/>
        
      </div>
      <Footer progress='Not Completed' buttonName = 'Start Course' status = 'none'/>
      
    </div>
  )
}

export default Explore
