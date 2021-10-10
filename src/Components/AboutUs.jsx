import * as React from 'react';

import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutUs() {
    return (
        <div>
              <section >
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4"></div>
                        </ScrollAnimation>
                        <div className="row justify-content-center align-items-center mx-0">
                            <div className="col-md-4 col1">
                                <ScrollAnimation animateIn="fadeInLeft">
                                  <h1>About Us</h1>
                                 </ScrollAnimation>
                            </div>
                            <div className="col-lg-6 col-md-8 col2">
                                <ScrollAnimation animateIn="fadeInRight">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
          
        </div>
    )
}