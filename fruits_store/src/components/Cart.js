import React from 'react';

export default class Cart extends React.Component{
    componentDidMount(){
        this.props.getCartProducts();
    }
    render(){
        return(
            <div className='cart'>
                <div><b>Cart</b></div>
                <div>
                    {
                        this.props.productsList.map(product => {
                            return (
                                <>
                                    <div key={product.id}>{product.name} | {product.quantity}</div>
                                </>
                                
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}