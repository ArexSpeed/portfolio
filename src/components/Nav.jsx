import {useRef} from 'react'
import {Link} from 'react-scroll'
import { IoIosArrowBack } from 'react-icons/io';


const Nav = () => {
  const buttonRef = useRef(null)
  const navRef = useRef(null)

  const toggle = () => {
    buttonRef.current.classList.toggle('active')
    navRef.current.classList.toggle('hide')
  }

  return (
    <>
    <div className="toggler">
      <button className="toggler-button" ref={buttonRef} onClick={toggle}><IoIosArrowBack style={{fontSize: '25px', margin: 'auto'}} /></button>
    </div>
    <nav className="nav" ref={navRef}>
      <div className="nav-avatar" />
      <ul className="nav-menu">
        <Link to="about" className="nav-link" >
          <div className="nav-link-line"></div>
          <div className="nav-link-text">ABOUT</div>
        </Link>
        <Link to="projects" className="nav-link" >
          <div className="nav-link-line"></div>
          <div className="nav-link-text">PROJECTS</div>
        </Link>
        <Link to="skills" className="nav-link" >
          <div className="nav-link-line"></div>
          <div className="nav-link-text">SKILLS</div>
        </Link>
        <Link to="contact" className="nav-link" >
          <div className="nav-link-line"></div>
          <div className="nav-link-text">CONTACT</div>
        </Link>
      </ul>
    </nav>
    </>
  )
}

export default Nav
