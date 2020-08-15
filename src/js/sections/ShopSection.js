import React, {Component} from "react";
import ProductEntry from "./ProductEntry";

export default class ShopSection extends Component {
    state = {
        costumes:[],
        loading: true
    };

    processRequest = async function(data){
        this.setState({ costumes: data });
        this.setState({ loading: false });
    };

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/costumes");
        const data = await response.json();
        await this.processRequest(data);
    }

    render() {
        return (
            <div>
                <aside id="colorlib-hero" className="breadcrumbs">
                    <div className="flexslider">
                        <ul className="slides">
                            <li style={{backgroundImage: "url(https://github.com/RANJAYART/disfraces-matachin-web/raw/master/src/images/disfraces-superheroes.jpg)"}}>
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                                            <div className="slider-text-inner text-center">
                                                <h1>Productos</h1>
                                                <h2 className="bread"><span><a href="index.html">Home</a></span>
                                                    <span>Shop</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
                {this.state.loading ? (
                    <div className="container"/>): (
                <div className="colorlib-shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-push-2">
                                <div className="row row-pb-lg">
                                    {this.state.costumes.map((costume, index) => {
                                        return <div className="col-md-4 text-center">
                                            <ProductEntry costume ={costume}/>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}