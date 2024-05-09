import './HomeBanner.css'
import './HomeSlider.css'
import BannerPicture from '../../assets/Images/BannerPicture.png'
import SliderPicture from '../../assets/Images/SliderPicture.png'
import ArrowButtonInactive from '../../assets/Images/ArrowButtonInactive.png'
import { MainButton } from "../MainButton/MainButton";

export function HomeBanner(){
    return(
        <>
            <div className='banner-main-cont'>
                <h1>WE ARE PALMO</h1>
                <p className='montserrat-text text-wrap font-bold'>At Palmo, we are passionate about crafting captivating digital experiences. With expertise in UX, UI, branding, web development, app development, post-production, animation, and video editing our team of four dedicated professionals collaborates seamlessly to bring our clients visions to life.</p>
                <MainButton text="Hire us"/>
            </div>
            <img className="banner-img" src={BannerPicture} alt="" />
        </>
    )
}

export function HomeSlider(){
    return(
        <>
            <div className='home-slider-cont'>
                <img src={ArrowButtonInactive} alt="" />
                <div>
                    <img src={SliderPicture} alt="" className='slider-picture'/>
                    <div className='project-caption'>
                        <h2 className='slider-project-text'>
                            Graphic Design
                        </h2>
                        <h2 className='slider-project-text'>
                            Projects
                        </h2>
                    </div>
                </div>
                <img src={ArrowButtonInactive} alt="" className='right-button'/>
            </div>

        </>
    )
}

export function NavLink(){
    return(
        <>
        </>
    )
}