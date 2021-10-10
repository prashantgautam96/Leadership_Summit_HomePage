import * as React from 'react';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from "@material-ui/core/Grid";
export default function WhatWeDo() {
    return (
        <div>
            
              <section >
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4"> </div>
                        </ScrollAnimation>
                        <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "10vh" }}
          >
            <Grid item xs={6}>
              <ScrollAnimation animateIn="fadeInLeft">
              <img src={card} alt="" /> 
              </ScrollAnimation>
            </Grid>
            <Grid item xs={6}>
              <ScrollAnimation animateIn="fadeInRight">
              <h1>What We Do</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
              </ScrollAnimation>
            </Grid>
          </Grid>
                    </div>
                </section>
          
        </div>
    )
}