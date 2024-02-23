import React from "react";
import './ContactUsReverse.scss';

function ContactUsReverse () {
    return (
        <section id="approccio" className="container contact-us reverse">
            <div className="contact-us--box">
                <div className="contact-us--box_left">
                    <h2 className='contact-us__title'>il nostro <span className="bold">approccio</span></h2>
                    <p> Per noi ogni cliente, ogni progetto e budget è unico. 
                        il nostro approccio è flessibile, così da adattarci e personalizzare i servizi, soddisfacendo così ogni specifica esigenza.
                        quando scegliete di lavorare con noi, diventate parte integrante del team. coinvolgiamo tutti durante il processo creativo.
                        solo insieme superiamo i limiti, sfidiamo la normalità e possiamo puntare all’eccellenza.

                        in dodostudio partiamo sempre dall’analisi profonda del brand per cui stiamo lavorando, così da capirne i valori intrinsechi e ciò che lo muove.
                    </p>
                </div>
                <div className="contact-us--box_right">
                    <div className="separator">
                        <div className="rhombus"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default ContactUsReverse;