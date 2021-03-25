import React from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav-button">{">"}</button>
      <div className="nav-avatar" />
      <ul className="nav-menu">
        <Link to="about" className="nav-link"><span className="nav-link-line"></span>ABOUT</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>PROJECTS</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>SKILLS</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>CONTACT</Link>
      </ul>
    </nav>
  )
}

export default Nav
