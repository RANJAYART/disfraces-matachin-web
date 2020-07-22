import React from "react";

function Footer(){

    return(
        <footer id="colorlib-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-3 colorlib-widget">
                        <h4>NOSOTROS</h4>
                        <p>Acercate a nuestra fabrica y conocenos personalmente</p>
                        <ul className="colorlib-social-icons">
                            <li><a href="#"><i className="icon-twitter"/></a></li>
                            <li><a href="#"><i className="icon-facebook"/></a></li>
                            <li><a href="#"><i className="icon-linkedin"/></a></li>
                            <li><a href="#"><i className="icon-dribbble"/></a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>CONTÁCTANOS</h4>
                        <ul className="colorlib-footer-links">
                            <li>Cra 31 D # 1A - 50</li>
                            <li><a href="tel://1234567920">3107833943</a></li>
                            <li><a href="mailto:info@yoursite.com">creacionesmotitas@yahoo.com</a></li>
                            <li><a href="#">www.disfracesmatachin.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                                    <span className="block"/>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> Design by House of Design <a href="https://colorlib.com" target="_blank"></a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;