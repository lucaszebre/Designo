import React from 'react'
import Layout from '../../Layout'
import BeforeNav from '../../Card/BeforeNav'
import CardLocation from '../../Card/CardLocation'
import CardLocation2 from '../../Card/CardLocation2'
const Locations = () => {
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
            <CardLocation 
                title='Canada'
                address1='Designo Central Office'
                address2='3886 Wellington Street'
                address3='Toronto, Ontario M9C 3J5'
                address4='Contact'
                address5='+1 253-863-8967'
                address6='M : contact@designo.co'
                image='/Designo/assets/locations/desktop/image-map-canada.png'
                image2='/Designo/assets/locations/tablet/image-map-canada.png'
                flexDirection='row'
            
            />
            <CardLocation2 
                title='Australia'
                address1='Designo AU Office'
                address2='19 Balonne Street'
                address3='New South Wales 2443'
                address4='Contact'
                address5='+61 4-9928-3629'
                address6='M : contact@designo.co'
                image='/Designo/assets/locations/desktop/image-map-australia.png'
                image2='/Designo/assets/locations/tablet/image-map-australia.png'
                flexDirection='row-reverse'
                
            />
            <CardLocation
                title='United Kingdom'
                address1='Designo UK Office'
                address2='13 Colorado Way'
                address3='Rhyd-y-fro SA8 9GA'
                address4='Contact'
                address5='+44 078 3115 1400'
                address6='M : contact@designo.co'
                image='/Designo/assets/locations/desktop/image-map-united-kingdom.png'
                image2='/Designo/assets/locations/tablet/image-map-uk.png'
                flexDirection='row'
               
            /> 
            <BeforeNav 
                title='Let’s talk about your project'
                description='Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.'
                button='Get in touch'
                width='90%'
            />
        </Layout>
        </div>
    )
}

export default Locations
