import React from "react";
import img_bg_1 from '../../images/img_bg_1.jpg' ;
import img_bg_2 from '../../images/img_bg_2.jpg' ;
import img_bg_3 from '../../images/img_bg_3.jpg' ;

class ImageSliderSection extends React.Component{
    render(){
        return(
            <div>
                <aside id="colorlib-hero">
                    <div className="flexslider">
                        <ul className="slides">
                            <li style="background-image: url({img_bg_1});">
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">DISFRACES</h1>
                                                    <h2 className="head-2">2019</h2>
                                                    <h2 className="head-3">Colección</h2>
                                                    <p className="category"><span>Nuevos personajes</span></p>
                                                    <p><a href="#" className="btn btn-primary">VER MÁS</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style="background-image: url({img_bg_2});">
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">DISFRACES</h1>
                                                    <h2 className="head-2">2019</h2>
                                                    <h2 className="head-3">COLECCIÓN</h2>
                                                    <p className="category"><span>Nuevos Personajes</span></p>
                                                    <p><a href="#" className="btn btn-primary">Ver más</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style="background-image: url({img_bg_3});">
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">DISFRACES</h1>
                                                    <h2 className="head-2">2019</h2>
                                                    <h2 className="head-3">COLECCIÓN</h2>
                                                    <p className="category"><span>Nuevos Personajes </span></p>
                                                    <p><a href="#" className="btn btn-primary">Ver Más</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }
}

export default  ImageSliderSection;