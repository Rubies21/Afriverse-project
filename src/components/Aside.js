import React from 'react'
import Asidebar from './Aside.module.css'
import padlock from '.././assets/padlock.svg'
const Aside = () => {
  return (
    <aside className={Asidebar.container}>
      <p>INTRODUCTION</p>
      <ul>
        <li> <img src={padlock}/><a href="#">Wtf is NFT?</a></li>
      </ul>

      <p>BREAKING IT DOWN</p>
      <ul>
        <li><img src={padlock}/><a href="#">Create your first NFT</a></li>
        <li><img src={padlock}/><a href="#">Decide what type of NFT to create</a></li>
        <li><img src={padlock}/><a href="#">Understanding what a marketplace is</a></li>
        <li><img src={padlock}/><a href="#">Setting up your crypto wallet</a></li>
      </ul>

      <p>MAKE YOUR FIRST NFT</p>
      <ul>
        <li><img src={padlock}/><a href="#">Requirements to get started</a></li>
        <li><img src={padlock}/><a href="#">Decide what type of NFT to create</a></li>
        <li><img src={padlock}/><a href="#">Understanding what a marketplace is</a></li>
        <li><img src={padlock}/><a href="#">Setting up your crypto wallet</a></li>
        <li><img src={padlock}/><a href="#">Understanding what a marketplace is</a></li>
      </ul>
    </aside>
  )
}

export default Aside
