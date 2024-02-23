import React from "react";

import './FloatMenu.scss';

function FloatMenu({ isOpen }) {
    const scrollTo = (e, el) => {
        e.preventDefault();
        let element = document.getElementById(el);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  
    return (
        <div className={`navigation-menu--float-link ${isOpen ? 'open' : ''}`}>
            <ul className="navigation-menu--float-link__labels">
                <li><a href="/" onClick={(e) => scrollTo(e, 'servizi')}>servizi</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'progetti')}>progetti</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'studio')}>studio</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'approccio')}>approccio</a></li>
                <li><a href="/" onClick={(e) => scrollTo(e, 'contatti')}>contatti</a></li>
            </ul>
        </div>
    )
    
}

export default FloatMenu;