import React, { Component } from 'react';
import { IndexSlogan } from '../IndexSlogan/IndexSlogan';
import { IndexSlogan } from '../MainIndex/MainIndex';
import { IndexSlogan } from '../MainPortfolio/MainPortfolio';
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
            
                        <MainIndex />
            
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