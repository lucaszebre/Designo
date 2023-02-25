import React from 'react'
import './CenterGraphicStyle.css'
import DesignCard from '../../Card/DesignCard'
const CenterGraphic = () => {
    return (
        <div className='CenterGraphicContainer'>
            <div className='CenterGraphicWrapper'>
                <DesignCard
                    image='/Designo/assets/graphic-design/desktop/image-change.jpg'
                    title='Tim Brown'
                    description='A book cover designed for Tim Brown’s new release, ‘Change’'
                />
                <DesignCard
                    image='/Designo/assets/graphic-design/desktop/image-boxed-water.jpg'
                    title='Boxed Water'
                    description='A simple packaging concept made for Boxed Water'
                />
                <DesignCard
                    image='/Designo/assets/graphic-design/desktop/image-science.jpg'
                    title='Science!'
                    description='A poster made in collaboration with the Federal Art Project'
                />


                </div>
        
        </div>
    )
}

export default CenterGraphic
