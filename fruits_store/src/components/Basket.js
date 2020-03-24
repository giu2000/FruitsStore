import React from "react";

export default class Basket extends React.Component {
    componentDidMount(){
        debugger;
        this.props.getCartProducts();
    }
    render(){
        const {loading, error, products} = this.props;
        if(loading){
            console.log('render-cart-loading')
            return (<div>Loading...</div>)
        }
        if(error){
            return(<div>Error</div>)
        }
        debugger;
        return (
            <>
                <div><b>Cart</b></div>
                <div>{products.map(product => {
                    return(
                        <div key={product.id}>{product.name}</div>
                    )
                })}</div>
            </>
        )
    }
}

