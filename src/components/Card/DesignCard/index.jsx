import React from 'react'
import './DesignCardStyle.css'
const DesignCard = (props) => {
    return (
        <div className='DesignCardContainer'>
            <img className='DesignCardImage' src={props.image} alt={props.title} />
            <div className="DesignCardWrapper">
                <h3 >{props.title}</h3>
                <p>{props.description}</p>
            </div>
        
        </div>
    )
}

export default DesignCard
