import React from 'react';
import PropTypes from 'prop-types';

const Details = props => {
    return(
        <div className='details'>
            <div>
                {props.details}
            </div>
        </div>
    )
}

Details.propTypes = {
    details: PropTypes.string
}

Details.defaultProps = {
    details: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}
export default Details;

