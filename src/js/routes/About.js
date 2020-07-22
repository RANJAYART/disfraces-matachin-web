import React, {Component} from "react";
import StickyHeader from "../sections/StickyHeader";
import SubscribeStripe from "../sections/SubscribeStripe";
import Footer from "../sections/Footer";
import AboutSection from "../sections/AboutSection";

export default class About extends Component {

    render() {
        return (
            <div>
                <StickyHeader/>
                <AboutSection/>
                <SubscribeStripe/>
                <Footer/>
            </div>
        );
    }
}