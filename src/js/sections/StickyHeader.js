import React from 'react';
import $ from "jquery";
import '../../css/header/StickyHeader.css';
import logo from '../../images/LOGO-MATACHIN-2019.png';
import {Link} from "react-router-dom";

class StickyHeader extends React.Component{

    componentDidMount(){
        this.$el = $(this.el);
    }

    componentWillMount() {
        if(!localStorage.getItem("shoppingCart")){
            localStorage.setItem("shoppingCart", JSON.stringify(new Map()));
        }
    }

    getAmountOfItemsInCart(){
        let numberOfCostumes = 0;
        let shoppingCart;
        if(localStorage.getItem("shoppingCart").length === 2) {
            shoppingCart = new Map();
        }
        else{
            shoppingCart = new Map(JSON.parse(localStorage.getItem("shoppingCart")));
        }

        shoppingCart.forEach(costume=>{
            numberOfCostumes+=JSON.parse(costume).amount;
        });
        return numberOfCostumes;
    }


    render(){
        return (
            <div>
                <nav className="colorlib-nav" role="navigation">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-2">
                                    <div id="colorlib-logo"><a href="/"><img src={logo}
                                                                                      width="100%" alt=""/></a></div>
                                </div>
                                <div className="col-xs-10 text-right menu-1">
                                    <ul>
                                        <li className="active"><a href="/">HOME</a></li>
                                        <li className="has-dropdown">
                                            <Link to = "/shop">DISFRACES</Link>
                                            <ul className="dropdown">
                                                <li><a href="#">NIÑA</a></li>
                                                <li><a href="#">NIÑO</a></li>
                                                <li><a href="#">MASCOTA</a></li>
                                                <li><a href="#">Order Complete</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">ALQUILER</a></li>
                                        <li><Link to="/about">NOSOTROS</Link></li>
                                        <li><a href="#">CONTACTO</a></li>
                                        <li><Link to="/cart"><i className="icon-shopping-cart"></i> CARRITO [{this.getAmountOfItemsInCart()}]</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default StickyHeader;