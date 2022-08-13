import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsBookmarkStar} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaRegUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BsBookmarkStar/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

export default Nav