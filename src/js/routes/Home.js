import React, {Component} from "react";
import StickyHeader from "../sections/StickyHeader";
import BackgroundCarousel from "../sections/BackgroundCarousel";
import CostumesDisplay from "../sections/CostumesDisplay";
import Promotions from "../sections/Promotions";
import SubscribeStripe from "../sections/SubscribeStripe";
import Footer from "../sections/Footer";

export default class Home extends Component {

    render() {
        return (
            <div>
                <StickyHeader/>
                <BackgroundCarousel/>
                <CostumesDisplay idSection={1}/>
                <CostumesDisplay idSection={2}/>
                <CostumesDisplay idSection={3}/>
                <Promotions/>
                <SubscribeStripe/>
                <Footer/>
            </div>
        );
    }
}