import React, {Component} from "react";
import CostumesDisplay from "./CostumesDisplay";

export default class ProductDetailsSection extends Component {

    state = {
        costume:{},
        section:[],
        loading: true,
        id: window.location.pathname.replace("/product-detail/", ""),
        amountAddtoCart: 1
    };

    processRequest = async function (data) {
        this.setState({costume: data.costumeDTO});
        this.setState({loading: false});
        this.setState({section: data.similarProducts});
    };

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/costumes/" + this.state.id);
        const data = await response.json();
        await this.processRequest(data);
    }

    increaseAmount(){
        this.setState({amountAddtoCart: this.state.amountAddtoCart+1});
        document.getElementById('quantity').value = this.state.amountAddtoCart;
    }

    changeToAmount(amount){
        this.setState({amountAddtoCart: amount} );
    }

    reduceAmount(){
        if(this.state.amountAddtoCart > 1){
            this.setState({amountAddtoCart: this.state.amountAddtoCart-1});
            document.getElementById('quantity').value = this.state.amountAddtoCart;
        }
    }

    addProductToCart = function(costume){
        if(!localStorage.getItem("shoppingCart")){
            localStorage.setItem("shoppingCart", JSON.stringify(new Map()));
        }

        let shoppingCart;
        if(localStorage.getItem("shoppingCart").length === 2) {
            shoppingCart = new Map();
        }
        else{
            shoppingCart = new Map(JSON.parse(localStorage.getItem("shoppingCart")));
        }

        if(shoppingCart.has(costume.id)){
            costume = JSON.parse(shoppingCart.get(costume.id));
            costume.amount+= this.state.amountAddtoCart;
            shoppingCart.set(costume.id,JSON.stringify(costume));
            localStorage.setItem("shoppingCart", JSON.stringify(new Array(...shoppingCart)));
        }
        else{
            costume.amount = this.state.amountAddtoCart;
            shoppingCart.set(costume.id,JSON.stringify(costume));
            localStorage.setItem("shoppingCart", JSON.stringify(new Array(...shoppingCart)));
        }
    }

    render() {
        return (<div>
            {this.state.loading ? (<div/>) : (
                <div className="colorlib-shop">
                    <div className="container">
                        <div className="row row-pb-lg">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="product-detail-wrap">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="product-entry">
                                                <div className="product-img"
                                                     style={{backgroundImage:"url("+this.state.costume.imageURL+")"}}>
                                                    <p className="tag"><span className="sale">Sale</span></p>
                                                </div>
                                                <div className="thumb-nail">
                                                    <a href="#" className="thumb-img"
                                                       style={{backgroundImage: "url(../images/item-11.jpg)"}}></a>
                                                    <a href="#" className="thumb-img"
                                                       style={{backgroundImage: "url(../images/item-12.jpg)"}}></a>
                                                    <a href="#" className="thumb-img"
                                                       style={{backgroundImage: "url(../images/item-16.jpg)"}}></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="desc">
                                                <h3>{this.state.costume.name}</h3>
                                                <p className="price">
                                                    <span>${this.state.costume.price}</span>
                                                    <span className="rate text-right">
											</span>
                                                </p>
                                                <p>{this.state.costume.description}</p>
                                                <div className="color-wrap">
                                                    <p className="color-desc">
                                                        Color:
                                                        {this.state.costume.colors.map((color) => {
                                                            return <a href="#" className={"color "+color.cssClassName}/>
                                                        })}
                                                    </p>
                                                </div>
                                                <div className="size-wrap">
                                                    <p className="size-desc">
                                                        Size:
                                                        {this.state.costume.sizes.map((size) => {
                                                            return <a href="#" className="size size-1">{size}</a>
                                                        })}
                                                    </p>
                                                </div>
                                                <div className="row row-pb-sm">
                                                    <div className="col-md-4">
                                                        <div className="input-group">
                                    	<span className="input-group-btn">
                                       	<button type="button" className="quantity-left-minus btn" data-type="minus"
                                                data-field="" onClick={()=>this.reduceAmount()}>
                                          <i className="icon-minus2"></i>
                                       	</button>
                                   		</span>
                                                            <input type="text" id="quantity" name="quantity"
                                                                   className="form-control input-number" value={this.state.amountAddtoCart} onChange={()=>this.changeToAmount}
                                                                   min="1" max="100"/>
                                                            <span className="input-group-btn">
                                       	<button type="button" className="quantity-right-plus btn" data-type="plus"
                                                data-field="" onClick={()=>this.increaseAmount()}>
                                            <i className="icon-plus2"/>
                                        </button>
                                    	</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p><a href="#" onClick={()=>this.addProductToCart(this.state.costume)} className="btn btn-primary btn-addtocart"><i
                                                    className="icon-shopping-cart"></i> Agregar al Carrito</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CostumesDisplay costumeId={this.state.id}/>
                </div>
            )}
        </div>);
    }
}