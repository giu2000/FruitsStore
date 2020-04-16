import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CustomLink = ({ pathLink, text }) => {
    return (
        <Link to={pathLink}>{text}</Link>
    )
}

CustomLink.propTypes = {
    pathLink: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default CustomLink;