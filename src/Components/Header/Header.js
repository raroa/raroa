import React, { Component } from 'react';

export class Header extends Component {
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
                                <a href="home-1.html">
                    Home
                    
                </a>
                                <ul className="dropdown">
    
                                    <li>
                                        <a href="home-1.html">
                    Home Default
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-2.html">
                    Minimal Portfolio
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">
                    Slider Home
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-4.html">
                    Video Home
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-5.html">
                    Freelancer Portfolio
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-6.html">
                    Minimal Agency
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-7.html">
                    One Page Agency
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-8.html">
                    Digital Agency
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="home-9.html">
                    Fullscreen Slider
                    
                </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="active nk-drop-item">
                                <a href="work-2-style-1.html">
                    Work
                    
                </a>
                                <ul className="dropdown">
    
                                    <li className=" nk-drop-item">
                                        <a href="work-2-style-1.html">
                    2 Columns
                    
                </a>
                                        <ul className="dropdown">
    
                                            <li>
                                                <a href="work-2-style-1.html">
                    Style 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-style-2.html">
                    Style 2
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-style-3.html">
                    Style 3
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-style-4.html">
                    Style 4
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-style-5.html">
                    Style 5
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-wide.html">
                    Wide 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-2-wide-2.html">
                    Wide 2
                    
                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active nk-drop-item">
                                        <a href="work-3-style-1.html">
                    3 Columns
                    
                </a>
                                        <ul className="dropdown">
    
                                            <li>
                                                <a href="work-3-style-1.html">
                    Style 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-style-2.html">
                    Style 2
                    
                </a>
                                            </li>
                                            <li className="active">
                                                <a href="work-3-style-3.html">
                    Style 3
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-style-4.html">
                    Style 4
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-style-5.html">
                    Style 5
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-wide.html">
                    Wide
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-metro-1.html">
                    Metro 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-3-metro-2.html">
                    Metro 2
                    
                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" nk-drop-item">
                                        <a href="work-4-style-1.html">
                    4 Columns
                    
                </a>
                                        <ul className="dropdown">
    
                                            <li>
                                                <a href="work-4-style-1.html">
                    Style 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-4-style-2.html">
                    Style 2
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-4-metro-1.html">
                    Metro 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-4-metro-2.html">
                    Metro 2
                    
                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" nk-drop-item">
                                        <a href="work-single-1.html">
                    Single Work
                    
                </a>
                                        <ul className="dropdown">
    
                                            <li>
                                                <a href="work-single-1.html">
                    Work 1
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-2.html">
                    Work 2
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-3.html">
                    Work 3
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-4.html">
                    Work 4
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-5.html">
                    Work 5
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-6.html">
                    Work 6
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-7.html">
                    Work 7
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-8.html">
                    Work 8
                    
                </a>
                                            </li>
                                            <li>
                                                <a href="work-single-9.html">
                    Work 9
                    
                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nk-drop-item">
                                <a href="page-about-me.html">
                    About
                    
                </a>
                                <ul className="dropdown">
    
                                    <li>
                                        <a href="page-about-me.html">
                    About Me
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="page-about-us.html">
                    About Us
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="page-services.html">
                    Services
                    
                </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" nk-drop-item">
                                <a href="blog-masonry-3.html">
                    Blog
                    
                </a>
                                <ul className="dropdown">
    
                                    <li>
                                        <a href="blog-classic.html">
                    Classic
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="blog-masonry-3.html">
                    Masonry 3 columns
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="blog-masonry-2.html">
                    Masonry 2 columns
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="blog-style-2-masonry-3.html">
                    Style 2 Masonry 3 columns
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="blog-style-2-masonry-2.html">
                    Style 2 Masonry 2 columns
                    
                </a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html">
                    Single Post
                    
                </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="page-contact-us.html">
                    Contact
                    
                </a>
                            </li>
                            <li>
                                <a href="https://themeforest.net/item/snow-minimal-clean-html-portfolio-template/18880113?ref=unvab">
                    Purchase Now
                    
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