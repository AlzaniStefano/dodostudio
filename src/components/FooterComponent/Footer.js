import React from "react";
import logo from '../../img/dodostudio-logo.svg'
import './Footer.scss';

function Footer () {
    return <footer className="container footer">
            <div id="contatti" className="links-container">
                <div className="hey">
                    <span>hey tu!</span>
                </div>
                
                <div className="contact-us_title">
                    <h2><span className="bold">parlaci</span> del</h2>
                    <h2>tuo progetto</h2>
                </div>
                <ul className="contact-us_list">
                    <li><a href="mailto:info@dodostudio.it">scrivici via email</a></li>
                    <li><a href="tel:+393319331318">chiamaci</a></li>
                    <li><a href="https://maps.app.goo.gl/nL75iaGKRhGrnLVx7">vieni a trovarci</a></li>
                </ul>
                
            </div>
            
            <div className="logo-copy">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="copy">
                    <ul>
                    <li>©dodostudio 2023</li>
                    <li><a href="https://www.instagram.com/dodo__studio/" target="blank">instagram</a></li>
                    <li><a href="mailto:info@dodostudio.it">info@dodostudio.it</a></li>
                    <li>P.IVA: 12741420967</li>
                    </ul>
                </div>
            </div>
            
  </footer>
}

export default Footer;