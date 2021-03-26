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
        <Link to="about" className="nav-link" ><div className="nav-link-line"></div>ABOUT</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>PROJECTS</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>SKILLS</Link>
        <Link to="about" className="nav-link"><div className="nav-link-line"></div>CONTACT</Link>
      </ul>
    </nav>
    </>
  )
}

export default Nav
