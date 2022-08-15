import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FaRegUserCircle} from 'react-icons/fa'
import {BsBookmarkStar} from 'react-icons/bs'
import {BsJournalBookmark} from 'react-icons/bs'
import {BiMessageDots} from 'react-icons/bi'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  // const mouse = useMousePosition()
  // console.log(window.scrollY > 300, ' ', mouse.y < 900,);
 
  const [show, setShow] = useState(true)
  // const controlNav = () => {
  //   if ((mouse.y < 900) && (window.scrollY > 300)) {
  //     setShow(false)
  //   } else {
  //     setShow(true)
  //   } 
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', controlNav)
  //   document.addEventListener('mousemove', controlNav)
  //   return () => {
  //   window.removeEventListener('scroll',controlNav)
  //   document.removeEventListener('mousemove',controlNav)
  // }
  // }, [])

  return (
    <nav className={`${show && 'navbar-show'}`} >
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><FaRegUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BsBookmarkStar/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : ''}><BsJournalBookmark/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}

export default Nav