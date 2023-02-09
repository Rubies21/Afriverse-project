import Nav from '../../components/Nav'
import Aside from '../../components/Aside'
import Main from '../../components/Main'
import Exploremodule from './Explore.module.css'
import Footer from '../../components/Footer'



const Explore = () => {
  return (
    <div>
      <Nav col='#EAF7FA'/>
      <div className = {Exploremodule.container}>
        <Aside/>
        <Main/>
        
      </div>
      <Footer progress='Not Completed' buttonName = 'Start Course' status = 'none'/>
      
    </div>
  )
}

export default Explore
