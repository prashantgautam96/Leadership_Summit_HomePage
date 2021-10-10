import * as React from "react";

import Grid from "@material-ui/core/Grid";

import "../Components.css";
import card from "../images/card.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Registration() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <ScrollAnimation animateIn="fadeInDown">
            <div className="text-center heading mb-lg-5 mb-md-5 mb-4">
              {" "}
              <h1>Registration Form</h1>
            </div>
          </ScrollAnimation>
           <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "10vh" }}
          >
            <Grid item xs={3}>
              <ScrollAnimation animateIn="fadeInLeft">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdPMQ-KiaUjtAFYN3mL4RMvhJBJWE0y-3DkhhcVzNLQOzcjkw/viewform?embedded=true"
                  width="600"
                  height="1600"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="-2%"
                >
                  Loading…
                </iframe>
              </ScrollAnimation>
            </Grid>
          </Grid>
          
          {/* <div className="justify-content-center align-items-center mx-0">
                            <div>
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <h1>Registration Form</h1>
                                    </ScrollAnimation>
                            </div>
                           
                        </div>
                   */}
        </div>
      </section>
    </div>
  );
}
