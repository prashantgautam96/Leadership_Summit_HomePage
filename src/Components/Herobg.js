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
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../Components.css';
import card from '../images/card.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionHome from './LandingPage';
import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import Theme from './Theme';
import Team from './Team';
import Timeline_ from './Timeline';
import Registration from './Registration Form';
import FAQ from './FAQ';
export default function Herobg() {
    return (
        <div>
            <div class="hero-image">
            <SectionHome/>
            <AboutUs />
            <WhatWeDo />
            <Theme/>
            <Timeline_ />
            <Team />
            <Registration />
            <FAQ/>
            </div>
        </div>
    )
}