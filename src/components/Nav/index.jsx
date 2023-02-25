import React from 'react'
import  './NavStyle.css'
import { DataIndexContext } from '../Layout'
import { Link } from 'react-router-dom'
const Nav = () => {
    const { isOpen, setIsOpen } = React.useContext(DataIndexContext)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
    <div className="NavContainer">
        <nav className="NavWrapper">
            <Link to={"/"}><img className="logoNav" src="/Designo/assets/shared/desktop/logo-dark.png" alt="logo-dark" /></Link>
            <img onClick={handleOpen} className="HamburgerNav" src="/Designo/assets/shared/mobile/icon-hamburger.svg" alt="Hamburger-icon" />
            
            <ul className="NavList"
                
            >
                <li className="NavItem">
                    <Link to="/company" className="NavLink hover-underline-animation ">OUR COMPANY</Link>
                </li>
                <li className="NavItem">
                    <Link to="/locations" className="NavLink hover-underline-animation ">LOCATIONS</Link>
                </li>
                <li className="NavItem">
                    <Link to="/contact" className="NavLink hover-underline-animation ">CONTACT</Link>
                </li>
            </ul>
        

        </nav>
        
    </div>
    )
}

export default Nav
