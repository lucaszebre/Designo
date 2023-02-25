import React from 'react'
import './AfterNavStyle.css'
const AfterNav = (props) => {
    return (
        <div className='AfterNavContainer'>
        <div className="AfterNavWrapper">
            <div className='Block1AfterNav'>
                <h1 className="TitleAfterNav">
                {props.title}
                </h1>
                <p className="AfterNavDescription">
                {props.description}
                </p>
            </div>
        </div>
    
    </div>
    )
}

export default AfterNav
