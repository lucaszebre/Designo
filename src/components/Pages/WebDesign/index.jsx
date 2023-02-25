import React from 'react'
import Layout from '../../Layout'
import BeforeNav from '../../Card/BeforeNav'
import Design from '../../WebDesign/Design'
import Bottom from '../../Card/Bottom'
import AfterNav from '../../Card/AfterNav'
const WebDesign = () => {
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
                title='Web Design'
                description='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
            />
            <Design />
            <Bottom 
                title1='App Design'
                title2='Graphic Design'
                image1="/Designo/assets/home/desktop/image-app-design.jpg"
                image2="/Designo/assets/home/desktop/image-graphic-design.jpg"
                link1='/appdesign'
                link2='/graphicdesign'
            />
            <BeforeNav 
                title='Let’s talk about your project'
                description='Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.'
                width='90%'
            />
        </Layout>
        </div>
    )
}

export default WebDesign
