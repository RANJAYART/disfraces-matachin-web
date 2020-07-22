import React, {Component} from "react";
import ProductEntry from "./ProductEntry";

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
        if(this.props.idSection){
            const response = await fetch("http://localhost:8080/costumes/"+this.props.idSection);
            const data = await response.json();
                for(let i = 0; i < data[0].sections.length; i++){
                    let section  = data[0].sections[i];
                    if(section && section.id === this.props.idSection){
                        this.setState({sectionTitle: section.name});
                        this.setState({subtext: section.subtext});
                    }
                }
            await this.processRequest(data);
        }
        else{
            const response = await fetch("http://localhost:8080/costumes");
            const data = await response.json();
            this.setState({sectionTitle: "TODOS NUESTROS DISFRACES"});
            this.setState({subtext: "Todo nuestro catálogo a tu disposición"});
            await this.processRequest(data);
        }
    }

    render() {

        return (
            <div className="colorlib-shop">
                {this.state.loading ? (
                    <div className="container"/>): (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
                            <h2><span>{this.state.sectionTitle}</span></h2>
                            <p>{this.state.subtext}</p>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.costumes.map((costume, index) => {
                            return <div className="col-md-3 text-center">
                                <ProductEntry costume ={costume}/>
                            </div>
                        })}
                    </div>
                </div>
        )}
            </div>
        );
    }
}