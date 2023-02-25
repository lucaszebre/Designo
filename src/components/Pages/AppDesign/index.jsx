import React from 'react'
import Layout from '../../Layout'
import BeforeNav from '../../Card/BeforeNav'
import AfterNav from '../../Card/AfterNav'
import Bottom from '../../Card/Bottom'
import CenterAppDesign from '../../AppDesign/Center'
const AppDesign = () => {
    return (
        <div
        style={
            {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxwidth: '1440px',
        }}
        >
        <Layout>
            <AfterNav
                title="App Design"
                description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
            />
            
            <CenterAppDesign />
            <Bottom
                title1="Web Design"
                title2="Graphic Design"
                image1="/Designo/assets/home/desktop/image-web-design-large.jpg"
                image2="/Designo/assets/home/desktop/image-graphic-design.jpg"
                link1="/webdesign"
                link2="/graphicdesign"
            />
            <BeforeNav
                title="Let’s talk about your project"
                width="90%"
                description="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
            />
        </Layout>
        </div>
    )
}

export default AppDesign
