import React from "react";

function CostumesDisplay(){
    return(
        <div className="colorlib-shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
                        <h2><span>NUEVOS MODELOS</span></h2>
                        <p>Últimas tendencias y los más recientes diseños </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="product-entry">
                            <div className="product-img" style={{backgroundImage:"url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/CasadePapel.jpg"}}>
                                <p className="tag"><span className="new">New</span></p>
                                <div className="cart">
                                    <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"></i></a></span>
                                        <span><a href="#"><i className="icon-eye"></i></a></span>
                                        <span><a href="#"><i className="icon-heart3"></i></a></span>
                                        <span><a href="#"><i className="icon-bar-chart"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h3><a href="shop.html">Casa de Papel</a></h3>
                                <p className="price"><span>$80.000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="product-entry">
                            <div className="product-img" style={{backgroundImage:"url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/CasadePapel.jpg)"}}>
                                <p className="tag"><span className="new">New</span></p>
                                <div className="cart">
                                    <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"></i></a></span>
                                        <span><a href="#"><i className="icon-eye"></i></a></span>
                                        <span><a href="#"><i className="icon-heart3"></i></a></span>
                                        <span><a href="#"><i className="icon-bar-chart"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h3><a href="#">Dead Pool</a></h3>
                                <p className="price"><span>$90.000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="product-entry">
                            <div className="product-img" style={{backgroundImage:"url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/CasadePapel.jpg)"}}>
                                <p className="tag"><span className="new">New</span></p>
                                <div className="cart">
                                    <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"></i></a></span>
                                        <span><a href="#"><i className="icon-eye"></i></a></span>
                                        <span><a href="#"><i className="icon-heart3"></i></a></span>
                                        <span><a href="#"><i className="icon-bar-chart"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h3><a href="#">Black Panther</a></h3>
                                <p className="price"><span>$90.000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="product-entry">
                            <div className="product-img" style={{backgroundImage:"url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/CasadePapel.jpg)"}}>
                                <p className="tag"><span className="new">New</span></p>
                                <div className="cart">
                                    <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"></i></a></span>
                                        <span><a href="#"><i className="icon-eye"></i></a></span>
                                        <span><a href="#"><i className="icon-heart3"></i></a></span>
                                        <span><a href="#"><i className="icon-bar-chart"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h3><a href="#">Robin</a></h3>
                                <p className="price"><span>$80.000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  CostumesDisplay;