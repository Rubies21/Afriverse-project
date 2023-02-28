import React from 'react'
import Nav from "../../components/Nav"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import Footer from '../../components/Footer'
import CreateModule from "./CreateContent.module.css"
import Asidebar from './Inner components/Asidebar'

const CreateContent = () => {

  return (

    <div className={CreateModule.wholeContainer}>
      <Nav col='#FCE9EB' />
      <div className={CreateModule.container}>
        <Asidebar/>
        <Outlet />
      </div>
      <Footer progress='10%' buttonName='Save Progress' />

    </div>

  )
}

export default CreateContent
