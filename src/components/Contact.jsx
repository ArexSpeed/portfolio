import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('email send');
  }

  return (
    <div className="contact" id="contact">
       <section className="section-title next">
        <h1 className="section-title-text">
          CONTACT
        </h1> 
      </section>
      <section className="contact-desc">
        If you have any question or proposition, send me a message by this form or use linkdin
      </section>
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button className="contact-form-button" type="submit">Send</button>
    </form>
    <section className="contact-icons">
      <a href="#" target="_blank">
        <AiFillLinkedin className="contact-icons-item"/>
      </a>
      <a href="#" target="_blank">
        <AiFillGithub className="contact-icons-item" />
      </a>
    </section>
    <footer className="contact-footer"> &copy; Arek Cichocki 2021</footer>
    </div>
  )
}

export default Contact
