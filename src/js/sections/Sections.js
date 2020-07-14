import React from "react";

function Sections(){
    return(<div id="colorlib-featured-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="shop.html" className="f-product-1"
                           style={{backgroundImage:"url(https://raw.githubusercontent.com/RANJAYART/disfraces-matachin-web/master/images/baquero.jpg)"}}>

                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="" className="f-product-2"
                                   style={{backgroundImage: "url(https://raw.githubusercontent.com/RANJAYART/disfraces-matachin-web/master/images/Flash.jpg)"}}>
                                    <div className="desc">
                                        <h2>Modelos <br/>Clásicos<br/></h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="" className="f-product-2"
                                   style={{backgroundImage:"url(https://raw.githubusercontent.com/RANJAYART/disfraces-matachin-web/master/images/ENfermera.jpg)"}}>
                                    <div className="desc">
                                        <h2><br/>20%<br/>off</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="" className="f-product-2"
                                   style={{backgroundImage:"url(https://raw.githubusercontent.com/RANJAYART/disfraces-matachin-web/master/images/disfraces-varios.jpg)"}}>
                                    <div className="desc">
                                        <h2>Pide <br/>nuestro<br/>catálogo</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Sections;