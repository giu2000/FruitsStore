import React from 'react';
import PropTypes from 'prop-types';
import { CartCounter } from '../CartCounter';
import { Navbar } from '../Navbar';

const Layout = props => {
    return (
        <div className='layout'>
            <CartCounter counter={props.counter}/>
            <Navbar />
            {props.children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object
}

export default Layout;