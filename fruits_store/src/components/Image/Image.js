import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Image = props => {
    const { src, alt, style } = props;
    return(
        <div className='image'>
            <img 
                src={require('../orange.jpg')}
                alt={alt}
                style={style}
            />
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object
}



export default Image;