import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";

const CustomLink = ({ pathLink, text, style}) => {
    return (
        <NavLink to={pathLink} style={style}>{text} </NavLink>
    )
}

CustomLink.propTypes = {
    pathLink: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default CustomLink;