import './AccountCard.css'
import './MembersSection.css'

import MarinPicture from '../../assets/Images/MarinPicture.png'
import Figma from '../../assets/Images/Figma.png'
import Illustrator from '../../assets/Images/Illustrator.png'
import Photoshop from '../../assets/Images/Photoshop.png'
import PremierePro from '../../assets/Images/PremierePro.png'
import AfterEffects from '../../assets/Images/AfterEffects.png'
import Blender from '../../assets/Images/Blender.png'


export function MembersSection(){
    return(
        <>
            <div className='member-section-cont'>
                <AccountCard/>
                <AccountCard/>
                <AccountCard/>
                <AccountCard/>
            </div>
        </>
    )
}

export function AccountCard(){
    return(
        <>
            <div className='member-container'>
                <h2 className='member-name'>
                    Juan Pablo Marin
                </h2>
                <div className='member-description-box'>
                    <p className='member-description-text'>Passionate designer specializing in post-production, animation, and motion graphics. Excellent in UI design and UX research, aiming to blend creativity with functionality to deliver impactful and user-centric digital experiences.</p>
                </div>
                <img src={MarinPicture} alt="" className='member-image'/>
                <div className='member-skills'>
                    <img src={Illustrator} alt="" className='skill-icon'/>
                    <img src={Photoshop} alt="" className='skill-icon'/>
                    <img src={AfterEffects} alt="" className='skill-icon'/>
                    <img src={PremierePro} alt="" className='skill-icon'/>
                    <img src={Figma} alt="" className='skill-icon'/>
                    <img src={Blender} alt="" className='skill-icon'/>
                </div>
            </div>
        </>
    )
}