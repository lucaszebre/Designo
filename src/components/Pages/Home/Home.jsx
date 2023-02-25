import React from 'react'
import Hero from '../../Home/Hero'
import Center from '../../Home/Center'
import  Skill  from '../../Home/Skill'
import BeforeNav from '../../Card/BeforeNav'
import Layout from '../../Layout'
const Home = () => {
    return (
        <div className='HomeContainer'
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
        <Hero />
        <Center />
        <Skill />
        <BeforeNav 
            title='Let’s talk about your project'
            width="90%"
            description='Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.'
        />
        </Layout>
        </div>
    )
}

export default Home
