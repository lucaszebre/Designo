import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyle.css'
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
    <div className='FooterContainer'>
        <footer className="FooterWrapper">
            <div className="Block1Footer">
                <Link onClick={handleScrollToTop} to={"/"}><img 
                style={{cursor: 'pointer'}}
                className='FooterLogo' src="/Designo/assets/shared/desktop/logo-light.png" alt="logo" /></Link>
                <ul className='FooterList'>
                    <li onClick={handleScrollToTop} className='FooterItems1'
                    ><Link  to="/company"className='FooterItems2 hover-underline-animation1'>OUR COMPANY</Link></li>
                    <li onClick={handleScrollToTop} className='FooterItems1'><Link to="/locations" className='FooterItems2 hover-underline-animation1'>LOCATIONS</Link></li>
                    <li onClick={handleScrollToTop} className='FooterItems1'><Link to="/contact" className='FooterItems2 hover-underline-animation1'>CONTACT</Link></li>
                </ul>
            </div>
            <div className="Block2Footer">
                <div className="FooterAdress">
                    <h1 className='FooterAdressItems'>Designo Central office</h1>
                    <p className='FooterAdressItems'>3886 Wellington Street</p>
                    <p className='FooterAdressItems'>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="FooterContact">
                    <h1 className='FooterContactItems'>Contact Us (Central Office)</h1>
                    <p className='FooterContactItems'>P : +1 253-863-8967</p>
                    <p className='FooterContactItems'>M : contact@designo.co </p>
                </div>
                <div className="FooterLogoSocials">
                    <img className="logosocials" src="/Designo/assets/shared/desktop/icon-facebook.svg" alt="logo-facebook" />
                    <img className="logosocials" src="/Designo/assets/shared/desktop/icon-twitter.svg" alt="logo-twitter" />
                    <img className="logosocials" src="/Designo/assets/shared/desktop/icon-instagram.svg" alt="logo-instagram" />
                    <img className="logosocials" src="/Designo/assets/shared/desktop/icon-youtube.svg" alt="logo-instagram" />
                    <img className="logosocials" src="/Designo/assets/shared/desktop/icon-pinterest.svg" alt="logo-instagram" />
                    </div>
                </div>
        </footer>
    </div>
    )
}

export default Footer
