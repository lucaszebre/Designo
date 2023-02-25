import React from 'react'
import Layout from '../../Layout'
import BeforeNav from '../../Card/BeforeNav'
import HeroAbout from '../../About/Hero'
import SeeLocation from '../../About/SeeLocation'
const Company = () => {
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

            <HeroAbout
                title="About Us"
                colorh1="#fff"
                colorp="#fff"
                description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
                ImageDesktop="/Designo/assets/about/desktop/image-about-hero.jpg"
                ImageTablet="/Designo/assets/about/tablet/image-about-hero.jpg"
                Mobile="/Designo/assets/about/mobile/image-about-hero.jpg"
                height="auto"
                BackgroundColor="#E7816B"
                gridArea1="1/1/2/2"
                gridTemplateColumns="1fr 1fr"
                gridArea2="1/2/2/3" 
            />
            <HeroAbout
                title="World-class talent"
                colorh1="#E7816B"
                colorp="#333136"
                description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
                ImageDesktop="/Designo/assets/about/desktop/image-world-class-talent.jpg"
                ImageTablet="/Designo/assets/about/tablet/image-world-class-talent.jpg"
                Mobile="/Designo/assets/about/mobile/image-world-class-talent.jpg"
                height="640px"
                BackgroundColor="#FDF3F0"
                gridArea1="1/2/2/3"
                gridTemplateColumns="1fr 1.8fr"
                gridArea2="1/1/2/2"
            />
            <SeeLocation />
            <HeroAbout
                title="Real deal"
                colorh1="#E7816B"
                colorp="#333136"
                description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
                ImageDesktop="/Designo/assets/about/desktop/image-real-deal.jpg"
                ImageTablet="/Designo/assets/about/tablet/image-real-deal.jpg"
                Mobile="/Designo/assets/about/mobile/image-real-deal.jpg"
                height="640px"
                BackgroundColor="#FDF3F0"
                gridArea1="1/1/2/2"
                gridTemplateColumns=" 1.8fr 1fr"
                gridArea2="1/2/2/3"
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

export default Company
