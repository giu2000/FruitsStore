import React from 'react';
import PropTypes from 'prop-types';

const Table = ({titles, values}) => {
    const ths = titles => {
        return (
            <tr>
                {titles.map(title => <th>{title}</th>)}
            </tr>
        )
    }
    const tds = values => {
        return (
            <tr>
                <td>{values.map(value => <td>{value}</td>)}</td>
            </tr>
        )
    }
    return(
        <table>
            <thead>
                {ths}
            </thead>
            <tbody>
                {tds}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    titles: PropTypes.array,
    values: PropTypes.array
}

export default Table;