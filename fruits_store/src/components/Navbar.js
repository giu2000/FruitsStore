import React from 'react';
import CustomLink from './CustomLink';
import {
    HOME_LINK_PLACEHOLDER,
    PRODUCTS_LIST_LINK_PLACEHOLDER,
    CART_LINK_PLACEHOLDER
} from '../utils/labels';
import {
    home,
    products_list,
    cart
} from '../utils/link';

export const homeConfig= {
    pathLink: home,
    text: HOME_LINK_PLACEHOLDER
}

export const cartConfig = {
    pathLink: cart,
    text: CART_LINK_PLACEHOLDER
}

export const productListConfig = {
    pathLink: products_list,
    text: PRODUCTS_LIST_LINK_PLACEHOLDER
}

let Navbar = ({firstConfig, secondConfig}) => {
            return (
                <div className='row' style={{ outline: '1px solid black' }}>
                    <div className='two columns'>Logo</div>
                    <div className='two columns'>
                        <CustomLink pathLink={firstConfig.pathLink} text={firstConfig.text} />
                    </div>
                    <div className='seven columns'>
                        <CustomLink pathLink={secondConfig.pathLink} text={secondConfig.text} />
                    </div>

                </div>
            )

}

const NavbarFunc = (PassedComponent) => {
    return class extends React.Component{
        render(){
            return(
                    <PassedComponent {...this.props} />
            )
        }
    }
};

export default Navbar = NavbarFunc(Navbar)
