import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import {BsSignal} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zud996s', 'template_zsotffl', form.current, 'mXZh-d0VWpE1v6cGB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jamestso0530@gmail.com</h5>
            <a href="mailto:jamestso0530@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp </h4>
            <h5>+852 95855621</h5>
            <a href="https://wa.me/+85295855621" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsSignal className='contact__option-icon'/>
            <h4>Signal</h4>
            <h5>+852 95855621</h5>
            <a href="https://signal.me/#p/+85295855621" target="_blank">Send a message</a>
          </article> 
        </div>

        {/* ========= END OF CONTACT OPTIONS ======== */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact