import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    const { src, alt, style } = props;
    return(
        <div className='image'>
            <img 
                src={src}
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