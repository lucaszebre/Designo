import React from 'react'
import './SkillStyle.css'
import SkillCard from '../SkillCard'
const Skill = () => {
    return (
        <div className='SkilContainer'>
            <div className="SkillWrapper">
                <SkillCard 
                    image="/Designo/assets/home/desktop/illustration-passionate.svg"
                    title="PASSIONATE"
                    description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                />
                    <SkillCard
                    image="/Designo/assets/home/desktop/illustration-friendly.svg"
                    title="FRIENDLY"
                    description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                />
                <SkillCard
                    image="/Designo/assets/home/desktop/illustration-resourceful.svg"
                    title="RESOURCEFUL"
                    description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                />
                
            </div>
            <img style={
                {
                    position: 'absolute',
                    bottom:'-15rem',
                    right: '0',
                    zIndex: '-1'
            }}src="/Designo/assets/shared/desktop/bg-pattern-leaf.svg" alt="pattern-leaf" />
        </div>
    )
}

export default Skill
