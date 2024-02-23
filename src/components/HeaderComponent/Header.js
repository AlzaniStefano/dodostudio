import React from "react";
import Hamburger from "./HamburgerMenu";
import logo from '../../img/dodostudio-logo.svg'
import './Header.scss';

function Header () {
    return <header>
            <nav className="navigation-menu navigation-container">
                <a href="#" className="site-identity-logo">
                    <img src={logo}></img>
                </a>

                <Hamburger />
            </nav>
  </header>
}

export default Header;