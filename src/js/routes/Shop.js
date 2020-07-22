import React, {Component} from "react";
import StickyHeader from "../sections/StickyHeader";
import SubscribeStripe from "../sections/SubscribeStripe";
import Footer from "../sections/Footer";
import ShopSection from "../sections/ShopSection";

export default class Shop extends Component {

    render() {
        return (
            <div>
                <StickyHeader/>
                <ShopSection/>
                <SubscribeStripe/>
                <Footer/>
            </div>
        );
    }
}