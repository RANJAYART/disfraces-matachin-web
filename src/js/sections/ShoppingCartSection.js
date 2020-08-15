import React, {Component} from "react";
import md5 from 'md5';
import ProductEntry from "./ProductEntry";

export default class ShoppingCartSection extends Component {

    shoppingCart = [];
    merchantId = 508029;
    accountId = 512321;
    apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
    orderReferenceCode = "TestPayU1";

    componentWillMount() {
        if (!localStorage.getItem("shoppingCart")) {
            localStorage.setItem("shoppingCart", JSON.stringify(new Map()));
        }

        let shoppingCartInMemory;
        if (localStorage.getItem("shoppingCart").length === 2) {
            shoppingCartInMemory = new Map();
        } else {
            shoppingCartInMemory = new Map(JSON.parse(localStorage.getItem("shoppingCart")));
        }

        shoppingCartInMemory.forEach(costume => {
            this.shoppingCart.push(JSON.parse(costume));
        });
    }

    getCartTotalPrice() {
        let totalPrice = 0;

        for (let i = 0; i < this.shoppingCart.length; i++) {
            totalPrice += (this.shoppingCart[i].price*this.shoppingCart[i].amount);
        }

        return totalPrice;
    }

    removeFromCart(itemToRemove){
        let shoppingCartMap = new Map();
        for( var i = 0; i < this.shoppingCart.length; i++) {
            if ( this.shoppingCart[i] === itemToRemove) {
                this.shoppingCart.splice(i, 1);
            }
            else{
                this.shoppingCart.set(this.shoppingCart[i].id,JSON.stringify(this.shoppingCart[i]));
            }
        }
        localStorage.setItem("shoppingCart", JSON.stringify(new Array(...shoppingCartMap)));
    }

    createSignature() {
        return md5(this.apiKey + "~" + this.merchantId + "~" + this.orderReferenceCode + "~" + this.getCartTotalPrice() + "~COP");
    }

    render() {
        return (
            <div>
                <div className="colorlib-shop">
                    <div className="container">
                        <div className="row row-pb-md">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="process-wrap">
                                    <div className="process text-center active">
                                        <p><span>01</span></p>
                                        <h3>CARRITO</h3>
                                    </div>
                                    <div className="process text-center">
                                        <p><span>02</span></p>
                                        <h3>Checkout</h3>
                                    </div>
                                    <div className="process text-center">
                                        <p><span>03</span></p>
                                        <h3>COMPLETA TÚ ORDEN</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pb-md">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="product-name">
                                    <div className="one-forth text-center">
                                        <span>PRODUCTO</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Precio</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Cantidad</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Total</span>
                                    </div>
                                    <div className="one-eight text-center">
                                        <span>Remover</span>
                                    </div>
                                </div>
                                {this.shoppingCart.map((costume) => {
                                    return <div className="product-cart">
                                        <div className="one-forth">
                                            <div className="product-img"
                                                 style={{backgroundImage: "url(" + costume.imageURL + ")"}}>
                                            </div>
                                            <div className="display-tc">
                                                <h3>{costume.name}</h3>
                                            </div>
                                        </div>
                                        <div className="one-eight text-center">
                                            <div className="display-tc">
                                                <span className="price">${costume.price}</span>
                                            </div>
                                        </div>
                                        <div className="one-eight text-center">
                                            <div className="display-tc">
                                                <input type="text" id="quantity" name="quantity"
                                                       className="form-control input-number text-center"
                                                       value={costume.amount}
                                                       min="1"
                                                       max="100"/>
                                            </div>
                                        </div>
                                        <div className="one-eight text-center">
                                            <div className="display-tc">
                                                <span className="price">${costume.price*costume.amount}</span>
                                            </div>
                                        </div>
                                        <div className="one-eight text-center">
                                            <div className="display-tc">
                                                <a href="#" className="closed" onClick={()=>this.removeFromCart(costume)}/>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="total-wrap">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="row form-group">
                                                <div className="col-md-3">
                                                    <form method="post"
                                                          action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                                                        <input name="merchantId" type="hidden" value={this.merchantId}/>
                                                        <input name="accountId" type="hidden" value={this.accountId}/>
                                                        <input name="description" type="hidden" value="Test PAYU"/>
                                                        <input name="referenceCode" type="hidden"
                                                               value={this.orderReferenceCode}/>
                                                        <input name="amount" type="hidden"
                                                               value={this.getCartTotalPrice()}/>
                                                        <input name="tax" type="hidden" value="0"/>
                                                        <input name="taxReturnBase" type="hidden" value="0"/>
                                                        <input name="currency" type="hidden" value="COP"/>
                                                        <input name="signature" type="hidden"
                                                               value={this.createSignature()}/>
                                                        <input name="test" type="hidden" value="1"/>
                                                        <input name="buyerEmail" type="hidden"
                                                               value="test@test.com"/>
                                                        <input name="responseUrl" type="hidden"
                                                               value="http://www.test.com/response"/>
                                                        <input name="confirmationUrl" type="hidden"
                                                               value="http://www.test.com/confirmation"/>
                                                        <input name="Submit" type="submit" value="Pagar"
                                                               className="btn btn-primary"/>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-md-push-1 text-center">
                                            <div className="total">
                                                <div className="sub">
                                                    <p><span>Subtotal:</span> <span>${this.getCartTotalPrice()}</span>
                                                    </p>
                                                    <p><span>Envío:</span> <span>$0.00</span></p>
                                                </div>
                                                <div className="grand-total">
                                                    <p><span><strong>Total:</strong></span>
                                                        <span>${this.getCartTotalPrice()}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}