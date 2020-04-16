import React from 'react';
import PropTypes from 'prop-types';

const TitlePage = ({title}) => (<h5>{title}</h5>);


TitlePage.propTypes = {
    title: PropTypes.string
}

export default TitlePage;
