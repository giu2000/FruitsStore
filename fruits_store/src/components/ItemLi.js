import React from 'react';
import PropTypes from 'prop-types';

const ItemLi = ({children}) => {
    return(
        <div className='four columns' style={{ outline: '1px solid black', marginLeft:'0%' }}>
            {children}
        </div>
    )
}

ItemLi.propTypes = {
    children: PropTypes.node
}

export default ItemLi;