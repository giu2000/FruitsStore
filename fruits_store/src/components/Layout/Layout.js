import React from 'react';
import PropTypes from 'prop-types';
import { CartCounterContainer } from '../CartCounter';

const Layout = props => {
    return (
        <div className='layout'>
            <CartCounterContainer counter={props.counter}/>
            {props.children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object
}

export default Layout;