import Logo from './Logo'
import twitter from '../assets/images/icon-twitter.svg'
import facebook from '../assets/images/icon-facebook.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'

const Footer = ({fill}) => {
  return (
    <footer>
        <div className="container">
            <div className="footer-logo">
                <Logo fill={fill} />
            </div>
            <div className='second-nav-container'>
                <section className="secondary-nav">
                    <h5>Features</h5>
                    <ul>
                        <li><a href="">Link Shortening</a></li>
                        <li><a href="">Branded Links</a></li>
                        <li><a href="">Analytics</a></li>
                    </ul>
                </section>
                <section className="secondary-nav">
                    <h5>Resources</h5>
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Developers</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </section>
                <section className="secondary-nav">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </section>
            </div>
            <div className="social-media">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer