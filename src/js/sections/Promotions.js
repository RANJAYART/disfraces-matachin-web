import React from "react";

function Promotions() {

    return(
    <div id="colorlib-intro" className="colorlib-intro"
         style={{
             backgroundRepeat: "no-repeat",
             backgroundImage:"url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/src/images/disfraces-superheroes.jpg)",
             backgroundPosition: '50% -25px',
             backgroundSize: 'cover'
         }}
         >
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="intro-desc">
                        <div className="text-salebox">
                            <div className="text-lefts">
                                <div className="sale-box">
                                    <div className="sale-box-top">
                                        <h2 className="number">45</h2>
                                        <span className="sup-1">%</span>
                                        <span className="sup-2">Off</span>
                                    </div>
                                    <h2 className="text-sale">Sale</h2>
                                </div>
                            </div>
                            <div className="text-rights">
                                <h3 className="title">Just hurry up limited offer!</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.</p>
                                <p><a href="#" className="btn btn-primary">Shop Now</a> <a href="#"
                                                                                           className="btn btn-primary btn-outline">Read
                                    more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Promotions;