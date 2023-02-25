import React from 'react'
import './BottomStyle.css'
import { Link } from 'react-router-dom'
const Bottom = (props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
        <div className="BottomContainer">
        <div className='BottomWrapper'>
                <div className='Block1Bottom'
                    style={{
                        
                        width:"100%",
                        backgroundImage: `url(${props.image1})`
                        
                    
                    
                    }}

                >
                    <Link onClick={handleScrollToTop} className='Link' to={props.link1}>
                        <h1 className='BottomTitle'>{props.title1}</h1>
                        <div className='BottomRow'>
                            <p className="BottomView">VIEW PROJECTS</p>
                            <img src="/Designo/assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
                        </div>
                    </Link>
                </div>
                <div className='Block2Bottom'
                    style={{
                        
                        width:"100%",
                        backgroundImage: `url(${props.image2})`
                    
                    }}
                >
                    <Link onClick={handleScrollToTop} className='Link' to={props.link2}>
                        <h1 className='BottomTitle'>{props.title2}</h1>
                        <div className='BottomRow'>
                            <p className="BottomView">VIEW PROJECTS</p>
                            <img src="/Designo/assets/shared/desktop/icon-right-arrow.svg" alt="arrow-right" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Bottom
