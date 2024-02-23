import React from "react";
import './ContactUs.scss';

function ContactUs () {
    return (
        <section className="container contact-us">
            <div className="contact-us--box">
                <div className="contact-us--box_left">
                    <div className="separator">
                        <div className="line"></div>
                        <div className="rhombus"></div>
                    </div>
                    <a href='#' className="link">
                        <span>|contattaci</span>
                    </a>
                </div>
                <div className="contact-us--box_right">
                    <h2 className='contact-us__title'><span className="bold">Social media, branding,<br/> Ux/ui , funnel, siti web, <br/>landing  page<br/></span>e altre parole strane</h2>
                </div>
            </div>
            
            
        </section>
    )
}

export default ContactUs;