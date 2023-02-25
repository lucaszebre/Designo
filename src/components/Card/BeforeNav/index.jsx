import React from 'react'
import './BeforeNavStyle.css'
import { Link } from 'react-router-dom'
const BeforeNav = (props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
        <div className='BeforeNavContainer'>
            <div
            style={
                {
                    width: props.width,
                }
            }
            className="BeforeNavWrapper">
                <div className='Block1BeforeNav'>
                    <h1 className="TitleBeforeNav">
                    {props.title}
                    </h1>
                    <p className="BeforeNavDescription">
                        {props.description}
                    </p>
                </div>
                <Link onClick={handleScrollToTop} to={"/contact"}>
                    <button className="BeforeNavButton">
                        GET IN TOUCH
                    </button>
                </Link>
            </div>
        
        </div>
    )
    }

export default BeforeNav
