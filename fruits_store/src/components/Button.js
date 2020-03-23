import React from 'react';



const fakeProduct = {
    "id": "25",
    "name": "peer",
    "description": "peer description",
    "price": "200"
}

const Button = props => {
    return(
        <button onClick={() => props.handleClickAddToCart(fakeProduct)} >
            Add To cart
        </button>
    )
}

export default Button;
