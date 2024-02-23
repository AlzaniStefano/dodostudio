import React from "react";
import './MainBanner.scss';
import mainBanner from '../../img/deskBanner.jpg';
import mainBannerMobile from '../../img/mobBanner.png';
import arrow from "../../img/freccia.svg";
function MainBanner () {
    return (
        <section className="container banner">
            <div className="banner--image">
                <img className="desktop" src={mainBanner} srcSet={`${mainBannerMobile} 768w, ${mainBanner} 1200w`} />
                <img className="mobile" src={mainBannerMobile} />
            </div>
            
            <div className="banner--description">
                <div className="banner--description_text">
                    <h2>Siamo uno studio di<br/> <span className="bold">comunicazione, marketing,<br/> design e coding.</span></h2>
                </div>
                <div className="banner--description_arrow">
                    <img src={arrow}></img>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;