import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageWithLink = props => {
    const { src, alt, style, pathLink } = props;
    return (
        <div className='image'>
            <Link to={pathLink} >
                <img
                    src={src}
                    alt={alt}
                    style={style}
                />
            </Link>
        </div>
    )
}

ImageWithLink.propTypes = {
    pathLink:PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object
}


export default ImageWithLink;