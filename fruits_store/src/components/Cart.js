import React from 'react';

// const Cart = props => {
//     return (
//         <div className='cart'>
//             <div>Cart</div>
//             <div>
//                 {
//                     props.productsList.map(product =>{
//                         return (
//                             <div key={product.id}>{product.id}</div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Cart;

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
                                <div key={product.id}>{product.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}