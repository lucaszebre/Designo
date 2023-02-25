import React from 'react'
import './CenterStyle.css'
import { Link } from 'react-router-dom'
const Center = () => {
    return (
    <div className="CenterContainer">
        <div className='CenterWrapper'>
            <div className='Block1Center'>
                <Link className='Link' to={"/webdesign"}>
                    <h1 className='TitleCenter'>WEB DESIGN</h1>
                    <div className='CenterRow'>
                        <p className="ViewCenter">VIEW PROJECTS</p>
                        <img src="/Designo/assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
                    </div>
                </Link>
            </div>
                <div className='Block2Center'>
                    <Link className='Link' to={"/appdesign"}>
                        <h1 className='TitleCenter'>APP DESIGN</h1>
                        <div className='CenterRow'>
                            <p className="ViewCenter">VIEW PROJECTS</p>
                            <img src="/Designo/assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
                        </div>
                    </Link>
                </div>
                <div className='Block3Center'>
                    <Link className='Link' to={"/graphicdesign"}>
                        <h1 className='TitleCenter'>GRAPHIC DESIGN</h1>
                        <div className='CenterRow'>
                            <p className="ViewCenter">VIEW PROJECTS</p>
                            <img src="/Designo/assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    
    )
}

export default Center
