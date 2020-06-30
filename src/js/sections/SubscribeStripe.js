import React from "react";

function SubscribeStripe(){
    return(
        <div id="colorlib-subscribe">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="col-md-6 text-center">
                            <h2><i className="icon-paperplane"></i>Pide una cotización</h2>
                        </div>
                        <div className="col-md-6">
                            <form className="form-inline qbstp-header-subscribe">
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-0">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="email"
                                                   placeholder="Enter your email"/>
                                                <button type="submit" className="btn btn-primary">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeStripe;