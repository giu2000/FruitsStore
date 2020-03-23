import React from "react";

export default class Basket extends React.Component {
    componentDidMount(){
        this.props.getCartProducts();
        console.log('compDidMount-products', this.props.products)
    }
    render(){
        console.log('render-products', this.props.products)
        const {loading, error, products} = this.props;
        if(loading){
            console.log('render-cart-loading')
            return (<div>Loading...</div>)
        }
        if(error){
            return(<div>Error</div>)
        }
        console.log('render-cart-success')
        return (
            <>
                <div><b>Cart</b></div>
                <div>{products.map((elem, index) => {
                    return (
                        <div key={elem.id}>{elem.name}</div>
                    )
                })}</div>
            </>
        )
    }
}

