import React, {Component} from "react";

export default class CostumesDisplay extends Component {

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
            <div className="colorlib-shop">
                {this.state.loading ? (
                    <div className="container"/>): (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
                            <h2><span>NUEVOS MODELOS</span></h2>
                            <p>Últimas tendencias y los más recientes diseños </p>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.costumes.map((costume, index) => {
                            return <div className="col-md-3 text-center">
                                <div className="product-entry">
                                    <div className="product-img"
                                         style={{backgroundImage: "url("+costume.imageURL+")"}}>
                                        <p className="tag"><span className="new">New</span></p>
                                        <div className="cart">
                                            <p>
                                        <span className="addtocart"><a href="#"><i
                                            className="icon-shopping-cart"/></a></span>
                                                <span><a href="#"><i className="icon-eye"/></a></span>
                                                <span><a href="#"><i className="icon-heart3"/></a></span>
                                                <span><a href="#"><i className="icon-bar-chart"/></a></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3><a href="shop.html">{costume.name}</a></h3>
                                        <p className="price"><span>${costume.price}</span></p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
        )}
            </div>
        );
    }
}