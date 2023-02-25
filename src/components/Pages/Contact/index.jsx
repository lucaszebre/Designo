import React from 'react'
import Layout from '../../Layout'
import SeeLocation from '../../About/SeeLocation'
import HeroContact from '../../Contact/Hero'
const Contact = () => {
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
        <HeroContact
                title="Contact Us"
                colorh1="#fff"
                colorp="#fff"
                description="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
                ImageDesktop="/Designo/assets/about/desktop/image-about-hero.jpg"
                ImageTablet="/Designo/assets/about/tablet/image-about-hero.jpg"
                Mobile="/Designo/assets/about/mobile/image-about-hero.jpg"
                height="auto"
                BackgroundColor="#E7816B"
                gridArea1="1/1/2/2"
                gridTemplateColumns="1fr 1fr"
                gridArea2="1/2/2/3" 
            />
            <SeeLocation />
        </Layout>
        </div>
    )
    }

export default Contact
