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
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="pagination">
                                            <li className="disabled"><a href="#">&laquo;</a></li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-md-pull-10">
                                <div className="sidebar">
                                    <div className="side">
                                        <h2>Categories</h2>
                                        <div className="fancy-collapse-panel">
                                            <div className="panel-group" id="accordion" role="tablist"
                                                 aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingOne">
                                                        <h4 className="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion"
                                                               href="#collapseOne" aria-expanded="true"
                                                               aria-controls="collapseOne">Niños
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingTwo">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseTwo"
                                                               aria-expanded="false" aria-controls="collapseTwo">Niñas
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" className="panel-collapse collapse"
                                                         role="tabpanel" aria-labelledby="headingTwo">
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingThree">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseThree"
                                                               aria-expanded="false" aria-controls="collapseThree">Adultos
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="headingFour">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseFour"
                                                               aria-expanded="false" aria-controls="collapseThree">Mascotas
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side">
                                        <h2>Price Range</h2>
                                        <form method="post" className="colorlib-form-2">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="guests">Price desde:</label>
                                                        <div className="form-field">
                                                            <i className="icon icon-arrow-down3"></i>
                                                            <select name="people" id="people" className="form-control">
                                                                <option value="#">1</option>
                                                                <option value="#">20.000</option>
                                                                <option value="#">30.000</option>
                                                                <option value="#">40.000</option>
                                                                <option value="#">100.000</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="guests">Price hasta:</label>
                                                        <div className="form-field">
                                                            <i className="icon icon-arrow-down3"></i>
                                                            <select name="people" id="people" className="form-control">
                                                                <option value="#">40.000</option>
                                                                <option value="#">60.000</option>
                                                                <option value="#">70.000</option>
                                                                <option value="#">80.000</option>
                                                                <option value="#">100.000</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="side">
                                        <h2>Color</h2>
                                        <div className="color-wrap">
                                            <p className="color-desc">
                                                <a href="#" className="color color-1"></a>
                                                <a href="#" className="color color-2"></a>
                                                <a href="#" className="color color-3"></a>
                                                <a href="#" className="color color-4"></a>
                                                <a href="#" className="color color-5"></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="side">
                                        <h2>Size</h2>
                                        <div className="size-wrap">
                                            <p className="size-desc">
                                                <a href="#" className="size size-1">04</a>
                                                <a href="#" className="size size-2">06</a>
                                                <a href="#" className="size size-3">08</a>
                                                <a href="#" className="size size-4">10</a>
                                                <a href="#" className="size size-5">12</a>
                                                <a href="#" className="size size-5">14</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}