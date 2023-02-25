import React from 'react'
import Layout from '../../Layout'
import BeforeNav from '../../Card/BeforeNav'
import AfterNav from '../../Card/AfterNav'
import Bottom from '../../Card/Bottom'
import CenterGraphic from '../../GraphicDesign/CenterGraphic'
const Graphic = () => {
    return (
        <div style={
            {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxwidth: '1440px',
        }}>
        <Layout>
            <AfterNav
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            />


            <CenterGraphic />
            <Bottom
                title1="App Design"
                title2="Web Design"
                image1="/Designo/assets/home/desktop/image-app-design.jpg"
                image2="/Designo/assets/home/desktop/image-web-design-large.jpg"
                link1="/appdesign"
                link2="/webdesign"
            />
            
            <BeforeNav
                title="Let’s talk about your project"
                description="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
                width="90%"
            />
        </Layout>
        </div>
    )
}

export default Graphic
