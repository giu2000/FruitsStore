import React from 'react';
import TitlePage from './TitlePage';
import PropTyepes from 'prop-types';


export default class ProductDetails extends React.Component{
    static propTypes = {
        product: PropTyepes.object.isRequired
    }

    componentDidMount(){
        this.props.fetchProductDetails()
    }
 
    render(){
        const { product } = this.props;
        return (
            <div>
                <TitlePage title={"Product Detail"} />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td><i>$ {product.price}</i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
