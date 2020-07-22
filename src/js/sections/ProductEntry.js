import React, {Component} from "react";

export default class ProductEntry extends Component {

    render() {

        return (
            <div className="product-entry">
                <div className="product-img"
                     style={{backgroundImage: "url("+this.props.costume.imageURL+")"}}>
                    <p className="tag"><span className="new">New</span></p>
                    <div className="cart">
                        <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"/></a></span>
                            <span><a href="#"><i className="icon-eye"/></a></span>
                            <span><a href="#"><i className="icon-heart3"/></a></span>
                            <span><a href="#"><i className="icon-bar-chart"/></a></span>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <h3><a href="shop.html">{this.props.costume.name}</a></h3>
                    <p className="price"><span>${this.props.costume.price}</span></p>
                </div>
            </div>
        );
    }
}