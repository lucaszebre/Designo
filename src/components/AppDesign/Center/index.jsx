import React from 'react'
import './CenterAppDesignStyle.css'
import DesignCard from '../../Card/DesignCard'

const CenterAppDesign = () => {
    return (
        <div className='AppContainer'>
            <div className="AppWrapper">
                <DesignCard
                    image='/Designo/assets/app-design/desktop/image-airfilter.jpg'
                    title='Airfilter'
                    description='Solving the problem of poor indoor air quality by filtering the air'
                />
                <DesignCard
                    image='/Designo/assets/app-design/desktop/image-eyecam.jpg'
                    title='Eyecam'
                    description='Product that lets you edit your favorite photos and videos at any time'
                />
                <DesignCard
                    image='/Designo/assets/app-design/desktop/image-faceit.jpg'
                    title='Faceit'
                    description='Get to meet your favorite internet superstar with the faceit app'
                />
                <DesignCard

                    image='/Designo/assets/app-design/desktop/image-todo.jpg'
                    title='Todo'
                    description='A todo app that features cloud sync with light and dark mode'
                />
                <DesignCard

                    image='/Designo/assets/app-design/desktop/image-loopstudios.jpg'
                    title='Loopstudios'
                    description='A VR experience app made for Loopstudios'
                />

            </div>
        </div>
    )
}

export default CenterAppDesign
