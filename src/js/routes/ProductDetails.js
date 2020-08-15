import React, {Component} from "react";
import StickyHeader from "../sections/StickyHeader";
import SubscribeStripe from "../sections/SubscribeStripe";
import Footer from "../sections/Footer";
import ProductDetailsSection from "../sections/ProductDetailsSection";

export default class ProductDetails extends Component {

    render() {
        return (
            <div>
                <StickyHeader/>
                <ProductDetailsSection/>
                <SubscribeStripe/>
                <Footer/>
            </div>
        );
    }
}