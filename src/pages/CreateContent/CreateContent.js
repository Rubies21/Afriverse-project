import Nav from "../../components/Nav"
import Asidebar from "./Inner components/Asidebar"
import Footer from '../../components/Footer'

const CreateContent = () => {
  return (
    <div>
      <Nav col='#FCE9EB'/>
      <Asidebar/>
      <Footer progress='10%' buttonName='Save Progress' />
      
    </div>
  )
}

export default CreateContent
