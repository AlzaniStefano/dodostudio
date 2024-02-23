import React from "react";
import {useState, useRef} from 'react';
import FloatMenu from "./FloatMenu";

import './HamburgerMenu.scss';

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleClick = ( event ) => {
        setIsOpen(current => !current);
    };

    const scrollTo = (e, el) => {
        e.preventDefault();
        let element = document.getElementById(el);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

   
    return (
        <div className="navigation-menu--link">
            <ul className="navigation-menu--link__labels">
                <li><a href="/" onClick={(e) => scrollTo(e, 'servizi')}>servizi</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'progetti')}>progetti</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'studio')}>studio</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'approccio')}>approccio</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'contatti')}>contatti</a></li>
            </ul>


            <div className={`navigation-menu--link__hamburger-icon ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <FloatMenu isOpen={isOpen}/>

        </div>
    )
    
}

export default Hamburger;