import React from 'react'
import { DataIndexContext } from '../Layout'
import { Link } from 'react-router-dom'
import './SidebarStyle.css'
const Sidebar = () => {
    const { isOpen, setIsOpen } = React.useContext(DataIndexContext)
    return (
        <ul className="NavListMobile"
                style={{
                    transform: isOpen ? "translateX(0)" : "translateX(110%)",
                    transition: "transform 0.3s ease-in-out",
                    
                }
                }
            >
                <li className="NavItemMobile">
                    <Link to="/company" className="NavLinkMobile  ">OUR COMPANY</Link>
                </li>
                <li className="NavItemMobile">
                    <Link to="/locations" className="NavLinkMobile  ">LOCATIONS</Link>
                </li>
                <li className="NavItemMobile">
                    <Link to="/contact" className="NavLinkMobile  ">CONTACT</Link>
                </li>
            </ul>
    )
}

export default Sidebar
