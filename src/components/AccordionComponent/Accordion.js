import React from "react";
import {useState} from 'react';

import './Accordion.scss';

function Accordion () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ( event ) => {
        var elementId = event.currentTarget.id;
        var element = document.getElementById(event.currentTarget.id);
        document.querySelectorAll('.accordion--item').forEach(function (item){
            item.classList.remove('open');
        })
        element.classList.toggle('open');
        //setIsOpen(current => !current);
    };

    return (
        <section id="servizi" className="container accordion">
            <h4 className="accordion--title">
                    no seriamente, <span className="bold">cosa facciamo?</span> 
                </h4>
            <div className="accordion--content">
                <div id="socialMedia" className={`accordion--item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                    <p className="accordion--item__title">social media <span className='accordion-arrow'></span></p>
                    <p className="accordion--item__description">gestiamo e creiamo campagne pubblicitarie sulle tue piattaforme social</p>
                </div>
                <div id="branding" className={`accordion--item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                    <p className="accordion--item__title">branding <span className='accordion-arrow'></span></p>
                    <p className="accordion--item__description">creazione di naming, marchio, tone of voice e tutto quello che ne consegue.</p>
                </div>
                <div id="uxUi" className={`accordion--item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                    <p className="accordion--item__title">ux/ui <span className='accordion-arrow'></span></p>
                    <p className="accordion--item__description">sviluppiamo tutta la grafica e lo studio del posizionamento degli elementi del tuo sito web.</p>
                </div>
                <div id="funnel" className={`accordion--item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                    <p className="accordion--item__title">funnel <span className='accordion-arrow'></span></p>
                    <p className="accordion--item__description">devi convertire? studiamo e mettiamo a terra un funnel ad-hoc che ti aiuti nel raggiungimento dei tuoi obiettivi.</p>
                </div>
                <div id="landingPage" className={`accordion--item ${isOpen ? 'open' : ''}`}  onClick={handleClick}>
                    <p className="accordion--item__title">siti e landing page <span className='accordion-arrow'></span></p>
                    <p className="accordion--item__description">creiamo esperienze digitali e ti aiutiamo a crescere online.</p>
                </div>
            </div>
        </section>
    )
}

export default Accordion;