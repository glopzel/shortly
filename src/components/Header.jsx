import Logo from "./Logo"

const Header = ({fill}) => {
  return (
    <header className="container">
        <div>
          <Logo fill={fill}/>
        </div>
        <nav>
            <ul>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Resources</a></li>
            </ul>
            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header