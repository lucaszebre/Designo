import React from 'react'
import './DesignStyle.css'
import DesignCard from '../../Card/DesignCard'
const Design = () => {
    return (
        <div className='DesignContainer'>
            <div className="DesignWrapper">
                    <DesignCard 
                    image='/Designo/assets/web-design/desktop/image-express.jpg'
                    title='Express'
                    description='A multi-carrier shipping website for ecommerce businesses'
                    />
                    <DesignCard
                    image='/Designo/assets/web-design/desktop/image-transfer.jpg'
                    title='Transfer'
                    description='Site for low-cost money transfers and sending money within seconds'
                    />
                    <DesignCard
                    image='/Designo/assets/web-design/desktop/image-photon.jpg'
                    title='Photon'
                    description='A state-of-the-art music player with high-resolution audio and DSP effects'
                    />
                    <DesignCard
                    image='/Designo/assets/web-design/desktop/image-builder.jpg'
                    title='Builder'
                    description='Connects users with local contractors based on their location'
                    />
                    <DesignCard
                    image='/Designo/assets/web-design/desktop/image-blogr.jpg'
                    title='Blogr'
                    description='Blogr is a platform for creating an online blog or publication'
                    />
                    <DesignCard
                    image='/Designo/assets/web-design/desktop/image-camp.jpg'
                    title='Camp'
                    description='Get expert training in coding, data, design, and digital marketing'
                    />
                

            </div>
        
        </div>
    )
}

export default Design
