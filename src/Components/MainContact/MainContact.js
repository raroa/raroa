import React, { Component } from 'react';

export class MainContact extends Component {
    render() {
        return (
            <div className="nk-main">
            

                    {/* <!-- START: Google Map --> */}
                    <div id="google-map-contact" className="nk-gmaps nk-gmaps-lg"></div>
                    
                    {/* <!-- END: Google Map --> */}
            
                    {/* <!-- START: Contact Info --> */}
                    <div className="container">
                        <div className="nk-gap-5 mnt-10"></div>
                        <div className="row vertical-gap">
                            <div className="col-lg-5">
                                {/* <!-- START: Info --> */}
                                <h2 className="display-4">Contact Info:</h2>
                                <div className="nk-gap mnt-3"></div>
            
                                <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>
            
                                <ul className="nk-contact-info">
                                    <li>
                                        <strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
                                    <li>
                                        <strong>Phone:</strong> +44 987 065 908</li>
                                    <li>
                                        <strong>Email:</strong> info@Example.com</li>
                                    <li>
                                        <strong>Fax:</strong> +44 987 065 909</li>
                                </ul>
                                {/* <!-- END: Info --> */}
                            </div>
                            <div className="col-lg-7">
                                {/* <!-- START: Form --> */}
                                <form action="php/contact.php" className="nk-form nk-form-ajax">
                                    <div className="row vertical-gap">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control required" name="name" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control required" name="email" placeholder="Your Email" />
                                        </div>
                                    </div>
            
                                    <div className="nk-gap-1"></div>
                                    <input type="text" className="form-control required" name="title" placeholder="Your Title" />
            
                                    <div className="nk-gap-1"></div>
                                    <textarea className="form-control required" name="message" rows="8" placeholder="Your Comment" aria-required="true"></textarea>
                                    <div className="nk-gap-1"></div>
                                    <div className="nk-form-response-success"></div>
                                    <div className="nk-form-response-error"></div>
                                    <button className="nk-btn">Send Message</button>
                                </form>
                                {/* <!-- END: Form --> */}
                            </div>
                        </div>
                        <div className="nk-gap-5"></div>
                    </div>
                    {/* <!-- END: Contact Info --> */}
            
                </div>
        );
    }
}