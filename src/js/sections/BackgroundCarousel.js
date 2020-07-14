import React, {useReducer} from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../css/sections/BackgroundCarousel.css';
import '../../css/libs/style.css';


const images = [
    {
        original: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_1.jpg',
        thumbnail: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_1.jpg',
    },
    {
        original: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_2.jpg',
        thumbnail: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_2.jpg',
    },
    {
        original: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_3.jpg',
        thumbnail: 'https://github.com/RANJAYART/disfraces-matachin-web/raw/master/images/img_bg_3.jpg',
    }
];

const slider =(
    <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={5000}></ImageGallery>
);

function BackgroundCarousel(){

    return(
        <div className="image-gallery-wrapper">
            <div className="slider-text-inner carousel-text">
                <div className="desc">
                    <h1 className="head-1">DISFRACES</h1>
                    <h2 className="head-2">2019</h2>
                    <h2 className="head-3">Colección</h2>
                    <p className="category"><span>Nuevos personajes</span></p>
                    <p><a href="#" className="btn btn-primary">VER MÁS</a></p>
                </div>
            </div>
            {slider}
        </div>
    );
}

export default  BackgroundCarousel;