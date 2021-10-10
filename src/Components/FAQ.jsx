import * as React from 'react';

import '../Components.css';

import ScrollAnimation from 'react-animate-on-scroll';

export default function FAQ() {
    return (
        <div>
            
               <section id="timeline">
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4">Frequently Answered Questions</div>
                        </ScrollAnimation>
                        <div className="flex justify-content-center align-items-center mx-0">
                            <div>
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <p>Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </ScrollAnimation>
                            </div>
                            <div>
                                <ScrollAnimation animateIn="fadeInRight">
                                <p>Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    
                                </ScrollAnimation>
                            </div>
                            <div>
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <p>Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </ScrollAnimation>
                            </div>
                            <div>
                                <ScrollAnimation animateIn="fadeInRight">
                                <p>Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
    )
}