import React from "react";

export default class Basket extends React.Component {
    componentDidMount(){
        this.props.getCartProducts();
    }
    render(){
        console.log('productsList', this.props.productsList);
        const {loading, error, productsList} = this.props;
        if(loading){
            return (<div>Loading...</div>)
        }
        if(error){
            return(<div>Error</div>)
        }
        return (
            <>
                <div><b>Cart</b></div>
                <div>
                    {productsList.map(product => <div key={product.id}>{'product-id'+ product.id}</div>)}
                </div>
            </>
        )
    }
}

