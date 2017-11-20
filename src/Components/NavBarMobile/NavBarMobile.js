import React, { Component } from 'react';

export class NavBarMobile extends Component {
    render() {
        return (

    <nav className="nk-navbar nk-navbar-full nk-navbar-align-center" id="nk-nav-mobile">
    <div className="nk-navbar-bg">
        <div className="bg-image" style={{backgroundImage: `url('assets/images/bg-menu.jpg')`}}></div>
    </div>
    <div className="nk-nav-table">
        <div className="nk-nav-row">
            <div className="container">
                <div className="nk-nav-header">

                    <div className="nk-nav-logo">
                        <a href="index.html" className="nk-nav-logo">
                            <img src="assets/images/logo-light.svg" alt="" width="85"/>
                        </a>
                    </div>

                    <div className="nk-nav-close nk-navbar-full-toggle">
                        <span className="nk-icon-close"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="nk-nav-row-full nk-nav-row">
            <div className="nano">
                <div className="nano-content">
                    <div className="nk-nav-table">
                        <div className="nk-nav-row nk-nav-row-full nk-nav-row-center nk-navbar-mobile-content">
                            <ul className="nk-nav">
                                {/* Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

        );
    }
}