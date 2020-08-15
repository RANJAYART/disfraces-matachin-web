import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ProductEntry extends Component {

    addProductToCart = function(costume){
        if(!localStorage.getItem("shoppingCart")){
            localStorage.setItem("shoppingCart", JSON.stringify(new Map()));
        }

        let shoppingCart;
        if(localStorage.getItem("shoppingCart").length === 2) {
            shoppingCart = new Map();
        }
        else{
            shoppingCart = new Map(JSON.parse(localStorage.getItem("shoppingCart")));
        }

        if(shoppingCart.has(costume.id)){
            costume = JSON.parse(shoppingCart.get(costume.id));
            costume.amount++;
            shoppingCart.set(costume.id,JSON.stringify(costume));
            localStorage.setItem("shoppingCart", JSON.stringify(new Array(...shoppingCart)));
        }
        else{
            costume.amount = 1;
            shoppingCart.set(costume.id,JSON.stringify(costume));
            localStorage.setItem("shoppingCart", JSON.stringify(new Array(...shoppingCart)));
        }
    }

    render() {

        return (
            <div className="product-entry">
                <div className="product-img"
                     style={{backgroundImage: "url("+this.props.costume.imageURL+")"}}>
                    <p className="tag"><span className="new">New</span></p>
                    <div className="cart">
                        <p>
                            <span className="addtocart"><a href="#" onClick={()=>this.addProductToCart(this.props.costume)}><i
                                className="icon-shopping-cart"/></a></span>
                            <span><Link to={"/product-detail/"+this.props.costume.id}><i className="icon-eye"/></Link></span>
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