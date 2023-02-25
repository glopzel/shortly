import Logo from './Logo'

const Footer = ({fill}) => {
  return (
    <footer>
        <div className="container">
            <div className="footer-logo">
                <Logo fill={fill} />
            </div>
            <div>
                <section className="secondary-nav">
                    <h5>Features</h5>
                    <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
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
        </div>
    </footer>
  )
}

export default Footer