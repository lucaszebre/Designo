import React from 'react'
import './HeroAboutStyle2.css'
const HeroAbout = (props) => {
    return (
        <div className='HeroAboutContainer'
        >
            <div className="HeroAboutWrapper"
            style={{
                backgroundColor: props.BackgroundColor,
                gridTemplateColumns: props.gridTemplateColumns,
            
                
            }}>
            <img className='PatternAbout' src="/Designo/assets/about/desktop/bg-pattern-hero-about-desktop.svg" alt="bg-pattern" />

                <div className="HeroAboutContent1"
                style={{
                    gridArea: props.gridArea1,
                    backgroundColor: props.BackgroundColor
                }}
                >
                    <h1
                    style={{
                        color: props.colorh1
                    }}
                    >{props.title}</h1>
                    <p
                    style={{
                        color: props.colorp
                    }}
                    >
                        {props.description}
                    </p>
                </div>
                <img className='HeroAboutImageDesktop' src={props.ImageDesktop} alt="about-hero"
                style={{
                    gridArea: props.gridArea2
                }} 
                />
                <img className='HeroAboutImageTablet' src={props.ImageTablet} alt="about-hero"
                style={{
                    gridArea: props.gridArea2
                }} 
                />
                <img className='HeroAboutImageMobile' src={props.Mobile} alt="about-hero"
                style={{
                    gridArea: props.gridArea2
                }} 
                />
            </div>
        </div>
    )
}

export default HeroAbout
