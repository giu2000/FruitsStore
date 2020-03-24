import React from "react";

export default class Basket extends React.Component {
    componentDidMount(){
        this.props.getCartProducts();
    }
    render(){
        const {loading, error, products} = this.props;
        if(loading){
            return (<div>Loading...</div>)
        }
        if(error){
            return(<div>Error</div>)
        }
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

