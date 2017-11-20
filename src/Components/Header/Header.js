import React, { Component } from 'react';

export class Header extends Component {

    handleHomeClick() {

    }

    handleTechClick() {
        
            }

    handleAboutClick() {

    }

    handleServicesClick() {
        
            }

    handleContactClick() {
        
            }

    render() {
        return (
            <header className="nk-header nk-header-opaque">
            {/*START: Navbar
    
            Additional Classes:
                .nk-navbar-lg
                .nk-navbar-sticky
                .nk-navbar-autohide
                .nk-navbar-transparent
                .nk-navbar-transparent-always
                .nk-navbar-white-text-on-top
            */}
            
            <nav className="nk-navbar nk-navbar-top">
                <div className="container">
                    <div className="nk-nav-table">
    
                        <a href="index.html" className="nk-nav-logo">
    
                            <img src="assets/images/logo.svg" alt="" width="85"/>
                        </a>
    
    
                        <ul className="nk-nav nk-nav-right hidden-md-down" data-nav-mobile="#nk-nav-mobile">
    
                            <li className=" nk-drop-item">
                                <a onClick={this.handleClick} href="home">
                    Home
                    
                </a>
                            </li>
                            <li className="nk-drop-item">
                                <a onClick={this.handleTechClick} href="technologies">
                    Technologies
                    
                </a>
                        </li>
                            <li>
                                <a onClick={this.handleAboutClick} href="about">
                    About
                    
                </a>
                            </li>
                            <li>
                                <a onClick={this.handleServicesClick} href="services">
                    Services
                </a>
                            </li>
                            <li>
                                <a onClick={this.handleContactClick} href="contact">
                    Contact
                    
                </a>
                            </li>
                        </ul>
    
                        <ul className="nk-nav nk-nav-right nk-nav-icons">
    
                            <li className="single-icon hidden-lg-up">
                                <a href="#" className="nk-navbar-full-toggle">
                                    <span className="nk-icon-burger">
                                        <span className="nk-t-1"></span>
                                        <span className="nk-t-2"></span>
                                        <span className="nk-t-3"></span>
                                    </span>
                                </a>
                            </li>
    
    
    
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END: Navbar */}
    
        </header>
        );
    }
}