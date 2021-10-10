import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Herobg() {
    return (
        <div>
            <div class="hero-image">
                <section id="Team">
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4">Our Team</div>
                        </ScrollAnimation>
                        <div className="row justify-content-center align-items-center text-center">
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div class="card mb-lg-5 mb-md-5 mb-4">
                                        <img class="card-img-top" src={card} />
                                        <div class="card-body">
                                            <p class="card-text">Name</p>
                                            <p class="card-text">Designation</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}