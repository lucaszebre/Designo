import React from 'react'
import './CardCityStyle.css'
import { Link } from 'react-router-dom'
const CardCity = (props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
        <div className='CardCityContainer'>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <Link onClick={handleScrollToTop} to="/locations"><button>SEE LOCATION</button></Link>
        </div>
    )
    }

export default CardCity
