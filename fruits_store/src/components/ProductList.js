import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component{
    componentDidMount(){
        this.props.getAllProducts();
    }
    render(){
        const {loading, error, products} = this.props;
        debugger;
        if(loading){
            return <div>Loading..</div>
        }
        if(error){
            return <div>Error...</div>
        }
        return(
            <ul className='productList'>
                {products.map((elem, index) => {
                    return (
                            <Product 
                                key={index}
                                name={elem.name}
                            />
                        )
                    })
                }
        </ul>
        )
    }
}