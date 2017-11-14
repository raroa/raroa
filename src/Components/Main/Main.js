import React, { Component } from 'react';
import { IndexSlogan } from '../IndexSlogan/IndexSlogan';
import { Footer } from '../Footer/Footer';

export class Main extends Component {
    render() {
        return (
            <div className="nk-main">
            
            
            
            
                    <div className="container">
                        {/* START: Filter 
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
                         END: Filter */}
            
                        <IndexSlogan />
            
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
            
                    {/* START: Pagination 
                    <div className="nk-pagination nk-pagination-center">
                        <a href="#">Load More Works</a>
                    </div>
                     END: Pagination */}
            
            
            
                    {/*
                START: Footer
            
                Additional Classes:
                    .nk-footer-transparent
            */}
                    <Footer />
                    {/* END: Footer */}
            
            
                </div>
        );
    }
}