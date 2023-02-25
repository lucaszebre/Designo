import React from 'react'
import './SkillCardStyle.css'
const SkillCard = (props) => {
    return (
        <div className='SkillCardContainer'>
            <img className='SkillCardImage' src={props.image} alt={props.title} />
            <div className="SkillCardCol">
                <h1 className='SkillCardTitle'>{props.title}</h1>
                <p className='SkillCardDescription'>{props.description}</p>
            </div>
        </div>
    )
    }

export default SkillCard
