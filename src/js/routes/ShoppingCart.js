import React, {Component} from "react";
import StickyHeader from "../sections/StickyHeader";
import SubscribeStripe from "../sections/SubscribeStripe";
import Footer from "../sections/Footer";
import ShoppingCartSection from "../sections/ShoppingCartSection";

export default class ShoppingCart extends Component {

    render() {
        return (
            <div>
                <StickyHeader/>
                <ShoppingCartSection/>
                <SubscribeStripe/>
                <Footer/>
            </div>
        );
    }
}