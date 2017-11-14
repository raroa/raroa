import React, { Component } from 'react';

export class MainAboutUs extends Component {
    render() {
        return (
            <div className="nk-main">
            
                   {/*  <!-- START: Header Title --> */}
                   {/*  <!--
                Additional Classes:
                    .nk-header-title-sm
                    .nk-header-title-md
                    .nk-header-title-lg
                    .nk-header-title-xl
                    .nk-header-title-full
                    .nk-header-title-parallax
                    .nk-header-title-parallax-opacity
            --> */}
                    <div className="nk-header-title nk-header-title-lg nk-header-title-parallax nk-header-title-parallax-opacity">
                        <div className="bg-image">
                            <div style={{backgroundImage: `url('assets/images/header-about-us.jpg')`}}></div>
                            <div className="bg-image-overlay" style={{backgroundColor: `rgba(12, 12, 12, 0.6)`}}></div>
                        </div>
                        <div class="nk-header-table">
                            <div className="nk-header-table-cell">
                                <div className="container">
            
                                    <h2 className="nk-subtitle text-white">New Branding Agency</h2>
            
            
                                    <h1 className="nk-title display-3 text-white">We create successful digital
                                        <br />
                                        <em className="fw-400">products</em>
                                    </h1>
            
            
            
                                </div>
                            </div>
                        </div>
            
                    </div>
            
                   {/*  <!-- END: Header Title --> */}
            
            
            
            
            
                    {/* <!-- START: We Are Designers --> */}
                    <div className="nk-box bg-white">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="bg-image bg-image-parallax" style={{backgroundImage: `url('assets/images/services-1.jpg')`}}></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="nk-gap-4"></div>
            
                                    <div className="nk-box-4 mw-620">
                                        <h2 className="display-4">Who we are</h2>
                                        <div className="nk-gap mnt-5"></div>
            
                                        <p>Vestibulum gravida volutpat ipsum non ultrices. Praesent vitae risus. Ut a erat ullamcorper, accumsan felis lacinia, hendrerit. Vivamus scelerisque posuere arcu, eu malesuada purus.</p>
                                        <p>Suspendisse hendrerit mi vel sapien ultrices gravida. Proin non vehicula, pulvinar lorem vitae, pharetra augue.</p>
            
                                        <img src="assets/images/about-me-signature.png" alt="" class="nk-img-fit" />
                                    </div>
            
                                    <div className="nk-gap-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END: We Are Designers --> */}
            
                    {/* <!-- START: We Are Developers --> */}
                    <div className="nk-box bg-white">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 push-lg-6">
                                    <div className="bg-image bg-image-parallax" style={{backgroundImage: `url('assets/images/services-4.jpg')`}}></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                    <div className="nk-gap-6"></div>
                                </div>
                                <div className="col-lg-6 pull-lg-6">
                                    <div className="nk-gap-4"></div>
            
                                    <div className="nk-box-4 mw-620 mlauto">
                                        <h2 className="display-4">Professional Skills</h2>
                                        <div className="nk-gap mnt-5"></div>
            
                                        <div className="nk-progress nk-progress-sm nk-count" data-progress="75">
                                            <div className="nk-progress-title">UI/UX Design
                                                <span className="nk-progress-percent">75%</span>
                                            </div>
                                            <div className="nk-progress-line">
                                                <div style={{width: `75%`}}></div>
                                            </div>
                                        </div>
            
                                        <div className="nk-gap"></div>
                                        <div className="nk-progress nk-progress-sm nk-count" data-progress="90">
                                            <div className="nk-progress-title">Web Development
                                                <span className="nk-progress-percent">90%</span>
                                            </div>
                                            <div className="nk-progress-line">
                                                <div styleName={{width: `90%`}}></div>
                                            </div>
                                        </div>
            
                                        <div className="nk-gap"></div>
                                        <div className="nk-progress nk-progress-sm nk-count" data-progress="65">
                                            <div className="nk-progress-title">Marketing
                                                <span className="nk-progress-percent">65%</span>
                                            </div>
                                            <div className="nk-progress-line">
                                                <div style={{width: `65%`}}></div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="nk-gap-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END: We Are Developers --> */}
                </div>
        );
    }
}