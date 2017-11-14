import React, { Component } from 'react';
import Externals from './Externals';
import { NavBarMobile } from './Components/NavBarMobile/NavBarMobile';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';

class App extends Component {

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
        <div>
      
    <Header />
   
  {/*
      START: Navbar Mobile

    Additional Classes:
        .nk-navbar-align-center
        .nk-navbar-align-right
  */}

    <NavBarMobile />
    
    {/* END: Navbar Mobile */}


    <Main />
    
    </div>

    
    );
    
  }
}

export default App;
