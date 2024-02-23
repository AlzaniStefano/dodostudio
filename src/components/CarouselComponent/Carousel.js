import React from "react";
import CarouselItems from "./CarouselItems"

import './Carousel.scss';

function Carousel () {
    return (
        <section id="progetti" className="container carousel">
            <div className="carousel--content">
                <h4 className="carousel--content__title">
                    come lo <span className="bold">facciamo?</span> 
                </h4>
                <CarouselItems/>
            </div>
        </section>
    )
}

export default Carousel;