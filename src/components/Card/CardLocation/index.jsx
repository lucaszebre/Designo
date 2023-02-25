import React from 'react'
import './CardLocoationStyle.css'
const CardLocation = (props) => {
    return (
        <div className='CardLocationContainer'>
            <div className="CardLocationWrapper"
                >
            <img className='CardLocationImageT' src={props.image2} alt={props.title}/>
                <div className="BlockCardLocation"
                style={{
                    // props.marginRight1 ? MarginRight: '0px' : MarginRight: '2em'
                
                    

                }}
                >
                    <img className='BgPattern' src="/Designo/assets/shared/desktop/bg-pattern-two-circles.svg" alt="bg-pattern-two-cirlce" />
                        <h1 className='TitleLocation'>{props.title}</h1>
                        <div className="WrapCardLocation1">
                            <p>{props.address1}</p>
                            <p>{props.address2}</p>
                            <p>{props.address3}</p>
                        </div>
                    
                    <div className="WrapCardLocation2"
                        
                    >
                            <p>{props.address4}</p>
                            <p>{props.address5}</p>
                            <p>{props.address6}</p>
                        </div>
                </div>
                <img className='CardLocationImageD' src={props.image} alt={props.title}
                style={{
                    
                    
                    
                }}
                />
            </div>
        </div>
    )
}

export default CardLocation
