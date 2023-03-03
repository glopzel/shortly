import { useState, useRef, useEffect } from "react"
import burgerIcon from "../assets/images/burger.svg"
import closeIcon from "../assets/images/close.svg"
import Logo from "./Logo"

const Header = ({fill}) => {
  const [navExpanded, setNavExpanded] = useState(false)

  const toggleNav = (e) => {
    
    if (e) {
      e.currentTarget.setAttribute('aria-expanded', !navExpanded)
    }
    setNavExpanded(!navExpanded)
  }

  const ref = useRef(null);

  useEffect(() => {
    const primaryNav = ref.current;
 
    if (navExpanded) {
      document.body.classList.add('hide-overflow');
    } else {
      document.body.classList.remove('hide-overflow');
    }
  
    primaryNav.setAttribute('data-visible', navExpanded);

  }, [navExpanded]);

  return (
    <header className="first-header">
        <div className="logo">
          <Logo fill={fill}/>
        </div>

        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded='false' onClick={(e) => toggleNav(e)}>
          <img id="burger-icon" className={navExpanded ? 'hidden' : 'nav-btn'} src={burgerIcon} alt="" />
          <img id="close-icon" className={navExpanded ? 'nav-btn' : 'hidden'} src={closeIcon} alt="" />
        </button>

        <nav className="first-nav">
          <ul ref={ref} role='list' data-visible="false" id="primary-navigation" className="primary-navigation">
            <ul className="first-ul">
                  <li><a className="nav-btn" href="" onClick={() => navExpanded ? toggleNav() : ''}>Features</a></li>
                  <li><a className="nav-btn" href="" onClick={() => navExpanded ? toggleNav() : ''}>Pricing</a></li>
                  <li><a className="nav-btn" href="" onClick={() => navExpanded ? toggleNav() : ''}>Resources</a></li>
              </ul>
              <ul>
                  <li><a className="nav-btn" href="" onClick={() => navExpanded ? toggleNav() : ''}>Login</a></li>
                  <li><a id="sign-up-btn" className="nav-btn" href="" onClick={() => navExpanded ? toggleNav() : ''}>Sign Up</a></li>
              </ul>
          </ul>
        </nav>
    </header>
  )
}

export default Header