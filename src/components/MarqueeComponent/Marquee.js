import React from "react";
import Marquee from "react-fast-marquee";
import './Marquee.scss';

function MarqueeComponent () {
    return (
        <section className="marquee">
            <Marquee
                autoFill="true"
                className="marquee--content">
                non la solita agenzia •&nbsp;
            </Marquee>
        </section>
    )
}

export default MarqueeComponent;