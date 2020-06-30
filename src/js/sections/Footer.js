import React from "react";

function Footer(){

    return(
        <footer id="colorlib-footer" role="contentinfo">
            <div class="container">
                <div class="row row-pb-md">
                    <div class="col-md-3 colorlib-widget">
                        <h4>NOSOTROS</h4>
                        <p>Acercate a nuestra fabrica y conocenos personalmente</p>
                        <p>
                            <ul class="colorlib-social-icons">
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                    </div>

                    <div class="col-md-3">
                        <h4>CONTÁCTANOS</h4>
                        <ul class="colorlib-footer-links">
                            <li>CRa 31 D # 1A - 50</li>
                            <li><a href="tel://1234567920">3107833943</a></li>
                            <li><a href="mailto:info@yoursite.com">creacionesmotitas@yahoo.com</a></li>
                            <li><a href="#">www.disfracesmatachin.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copy">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p>
                                    <span class="block"/>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> Design by House of Design <a href="https://colorlib.com" target="_blank"></a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;