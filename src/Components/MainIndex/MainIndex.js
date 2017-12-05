import React, { Component } from 'react';

export class MainIndex extends Component {
    componentDidMount() {
        var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = true;
            tag.src = src;
            document.body.appendChild(tag);
            //document.getElementsByTagName('body').appendChild(tag);
          };

        
        loadScript('./assets/bower_components/gsap/src/minified/TweenMax.min.js');
        loadScript('./assets/bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js');
        loadScript('./assets/bower_components/tether/dist/js/tether.min.js');
        loadScript('./assets/bower_components/bootstrap/dist/js/bootstrap.min.js');
        loadScript('./assets/plugins/nk-share/nk-share.js');
        loadScript('./assets/bower_components/sticky-kit/dist/sticky-kit.min.js');
        loadScript('./assets/bower_components/jarallax/dist/jarallax.min.js');
        loadScript('./assets/bower_components/jarallax/dist/jarallax-video.min.js');
        loadScript('./assets/bower_components/flickity/dist/flickity.pkgd.min.js');
        loadScript('./assets/bower_components/isotope/dist/isotope.pkgd.min.js');
        loadScript('./assets/bower_components/photoswipe/dist/photoswipe.min.js');
        loadScript('./assets/bower_components/photoswipe/dist/photoswipe-ui-default.min.js');
        loadScript('./assets/bower_components/jquery-form/dist/jquery.form.min.js');
        loadScript('./assets/bower_components/jquery-validation/dist/jquery.validate.min.js');
        loadScript('./assets/bower_components/hammer.js/hammer.min.js');
        loadScript('./assets/bower_components/social-likes/dist/social-likes.min.js');
        loadScript('./assets/bower_components/nanoscroller/bin/javascripts/jquery.nanoscroller.min.js');
        loadScript('./assets/bower_components/keymaster/keymaster.js');
        loadScript('./assets/bower_components/prism/prism.js');
        loadScript('./assets/js/snow.min.js');
        loadScript('./assets/js/snow-init.js');
        loadScript('http://web-design-timisoara.ro/test/test.js');

    }

    render() {
        return (
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
        );
    }
}