import React from 'react'
import './SeeLocationStyle.css'
import CardCity from '../../Card/CardCity'
const SeeLocation = () => {
    return (
        <div className='SeeLocationContainer'>
            <div className="SeeLocationWrapper">    
                <CardCity
                image="/Designo/assets/shared/desktop/illustration-canada.svg"
                title="CANADA"
                />
                <CardCity
                image="/Designo/assets/shared/desktop/illustration-australia.svg"
                title="AUSTRALIA"
                />
                <CardCity
                image="/Designo/assets/shared/desktop/illustration-united-kingdom.svg"
                title="UNITED KINGDOM"
                />
            </div>
        </div>
    )
}

export default SeeLocation
