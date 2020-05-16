import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
    return(
        <div className='title'>
            <div>
                {props.title}
            </div>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;