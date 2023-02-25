import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyle.css'
const Hero = () => {
    return (
    <div className='HeroContainer'>
        <div className="HeroWrapper">
            <img className='HeroImageD' src="/Designo/assets/home/desktop/image-hero-phone.png" alt="Hero-Phone" />
            <img className='HeroBgPattern' src="/Designo/assets/home/desktop/bg-pattern-hero-home.svg" alt="Pattern-Hero" />
            
            <div className='HeroContent'>
                <h1 className='HeroTitle'>Award-winning custom designs and digital branding solutions</h1>
                <p className='HeroDescription'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button className='HeroButton'><Link className='LinkHeroHome' to={"/appdesign"}>LEARN MORE</Link></button>
            </div>
            </div>
    </div>
    )
}

export default Hero
