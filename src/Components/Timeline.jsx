import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Typography from '@material-ui/core/Typography';

import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Timeline_() {
    return (
        <div>
            
               <section id="timeline">
                    <div className="container-fluid">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="text-center heading mb-lg-5 mb-md-5 mb-4">Timeline</div>
                        </ScrollAnimation>
                        <div className="row justify-content-center align-items-center mx-0">
                            <div className="col-md-4 col1">
                                <ScrollAnimation animateIn="fadeInLeft">
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineConnector />
                                                <TimelineDot color="primary">
                                                    <LaptopMacIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent >
                                                <Typography variant="h6" component="span">
                                                    Something
                                                </Typography>
                                                <Typography>Something Lorem Ipsum</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineConnector />
                                                <TimelineDot color="primary">
                                                    <LaptopMacIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" component="span">
                                                    Something
                                                </Typography>
                                                <Typography>Something Lorem Ipsum</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineConnector />
                                                <TimelineDot color="primary">
                                                    <LaptopMacIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" component="span">
                                                    Something
                                                </Typography>
                                                <Typography>Something Lorem Ipsum</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineConnector />
                                                <TimelineDot color="primary">
                                                    <LaptopMacIcon />
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" component="span">
                                                    Something
                                                </Typography>
                                                <Typography>Something Lorem Ipsum</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-6 col-md-8 col2">
                                <ScrollAnimation animateIn="fadeInRight">
                                    <img src={card}></img>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
    )
}