import React from "react";

import logo from "../../img/dodostudio-logo.svg";
import img from "../../img/deskContactUs.jpg";
import './Studio.scss';

function Studio () {
    return (
        <section id="studio" className="container studio">
                <div className="studio--title">
                    <img src={logo}></img>
                    <a href='#' className="link">
                        <span>contattaci|</span>
                    </a>
                </div>
                <div className="studio--description">
                    <p>Siamo entusiasti di collaborare con persone ambiziose e visionarie.<br/><br/>
                per noi non esiste una ricetta comune per l’innovazione, ed ogni progetto è un’opportunità per porci domande.
                tramite un processo collaborativo, aiutiamo a trovare soluzioni creative ai loro bisogni.<br/><br/>
                abbiamo creato uno spazio in cui tutti i collaboratori sono a proprio agio, liberi di esprimere le proprie idee, che vengono sempre analizzate e mai buttate.<br/><br/>
                siamo cultori di un’atmosfera di inclusività, in cui ognuno può contribuire con le proprie capacità</p>    
                </div>
                <img src={img}></img>
        </section>
    )
}

export default Studio;