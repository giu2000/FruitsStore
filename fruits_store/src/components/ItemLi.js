import React from 'react';
import PropTypes from 'prop-types';

const ItemLi = ({children}) => {
    return(
        <div >
            {children}
        </div>
    )
}

ItemLi.propTypes = {
    key: PropTypes.string,
    children: PropTypes.node
}

export default ItemLi;