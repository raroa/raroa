import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Externals from './Externals';
//import { test } from './assets/js/test';

class App extends Component {

 componentDidMount() {
        var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = true;
            tag.src = src;
            document.body.appendChild(tag);
            //document.getElementsByTagName('body').appendChild(tag);
          };

        
        loadScript('%PUBLIC_URL%/assets/bower_components/gsap/src/minified/TweenMax.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/tether/dist/js/tether.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/bootstrap/dist/js/bootstrap.min.js');
        loadScript('%PUBLIC_URL%/assets/plugins/nk-share/nk-share.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/sticky-kit/dist/sticky-kit.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/jarallax/dist/jarallax.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/jarallax/dist/jarallax-video.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/flickity/dist/flickity.pkgd.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/isotope/dist/isotope.pkgd.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/photoswipe/dist/photoswipe.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/photoswipe/dist/photoswipe-ui-default.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/jquery-form/dist/jquery.form.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/jquery-validation/dist/jquery.validate.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/hammer.js/hammer.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/social-likes/dist/social-likes.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/nanoscroller/bin/javascripts/jquery.nanoscroller.min.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/keymaster/keymaster.js');
        loadScript('%PUBLIC_URL%/assets/bower_components/prism/prism.js');
        loadScript('%PUBLIC_URL%/assets/js/snow.min.js');
        loadScript('%PUBLIC_URL%/assets/js/snow-init.js');
        //loadScript('%PUBLIC_URL%/assets/bower_components/gsap/src/minified/TweenMax.min.js');
        //loadScript('%PUBLIC_URL%/assets/bower_components/gsap/src/minified/TweenMax.min.js');
        //loadScript('%PUBLIC_URL%/assets/bower_components/gsap/src/minified/TweenMax.min.js');
        loadScript('http://web-design-timisoara.ro/test/test.js');

    }
      
      
  render() {

    return (
        <div>
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



   
  {/*
      START: Navbar Mobile

    Additional Classes:
        .nk-navbar-align-center
        .nk-navbar-align-right
  */}

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
            <div className="nk-nav-row">
                <div className="container">
                    <div className="nk-nav-social">
                        <ul>
                            <li><a href="https://twitter.com/nkdevv"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/unvabdesign/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://dribbble.com/_nK"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.instagram.com/unvab/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {/* END: Navbar Mobile */}


    <div className="nk-main">




        <div className="container">
            {/* START: Filter */}
            <div className="nk-pagination nk-pagination-nobg nk-pagination-center nk-isotope-filter-active">
                <a href="#nk-toggle-filter">
                    <span className="nk-icon-squares"></span>
                </a>
            </div>
            <ul className="nk-isotope-filter nk-isotope-filter-active">
                <li className="active" data-filter="*">All</li>
                <li data-filter="Branding">Branding</li>
                <li data-filter="Print">Print</li>
                <li data-filter="Photography">Photography</li>
                <li data-filter="Design">Design</li>
                <li data-filter="Mockup">Mockup</li>
            </ul>
            {/* END: Filter */}

            <div className="nk-portfolio-list nk-isotope nk-isotope-3-cols nk-isotope-gap">


                <div className="nk-isotope-item" data-filter="Mockup">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-7-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                <div className="portfolio-item-category">Mockup</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Print">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-4.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-4-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Modern T-Shirt</h2>
                                <div className="portfolio-item-category">Print</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Branding">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                        <a href="work-single-5.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-5-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Minimal Bag</h2>
                                <div className="portfolio-item-category">Branding</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Design">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-9-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Clean &amp; Groovy</h2>
                                <div className="portfolio-item-category">Design</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Design">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-3-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Minimal Mobile App</h2>
                                <div className="portfolio-item-category">Design</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Print">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                        <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-8-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">White T-Shirt</h2>
                                <div className="portfolio-item-category">Print</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Photography">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                        <a href="work-single-1.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-6-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Heja Stockholm</h2>
                                <div className="portfolio-item-category">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Branding">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-2.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-2-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Business Card</h2>
                                <div className="portfolio-item-category">Branding</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nk-isotope-item" data-filter="Photography">
                    <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                        <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                        <div className="nk-portfolio-item-image">
                            <div style={{backgroundImage: `url('assets/images/portfolio-12-sm.jpg')`}}></div>
                        </div>
                        <div className="nk-portfolio-item-info nk-portfolio-item-info-top">
                            <div>
                                <h2 className="portfolio-item-title h3">Paper Bag</h2>
                                <div className="portfolio-item-category">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="nk-gap-4"></div>
        </div>

        {/* START: Pagination */}
        <div className="nk-pagination nk-pagination-center">
            <a href="#">Load More Works</a>
        </div>
        {/* END: Pagination */}



        {/*
    START: Footer

    Additional Classes:
        .nk-footer-transparent
*/}
        <footer className="nk-footer">


            <div className="nk-footer-cont">
                <div className="container text-center">
                    <div className="nk-footer-social">
                        <ul>
                            <li><a href="https://twitter.com/nkdevv"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/unvabdesign/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://dribbble.com/_nK"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.instagram.com/unvab/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div className="nk-footer-text">
                        <p>2016 &copy; Design by Unvab. Code by nK</p>
                    </div>
                </div>
            </div>
        </footer>
        {/* END: Footer */}


    </div>
    <Externals />
    </div>

    
    );
    
  }
}

export default App;
