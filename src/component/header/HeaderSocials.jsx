import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import {BsSignal} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="mailto:jamestso0530@gmail.com" target="_blank"><HiOutlineMail /></a>
        <a href="https://wa.me/+85295855621" target="_blank"><ImWhatsapp /></a>
        <a href="https://signal.me/#p/+85295855621" target="_blank"><BsSignal /></a>
    </div>
  )
}

export default HeaderSocials