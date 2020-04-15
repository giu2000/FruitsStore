import React from 'react';
import PropTypes from 'prop-types';

const ThsComponnet = (PassedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <PassedComponent {...this.props}/>
                </>
            )
        }
    }
}

const ThsFunction =({titles}) => {
    return(
        <tr>
            {titles.map((title, index) => {
                return(
                    <th key={index}>
                        {title}
                    </th>
                )
            })}
        </tr>
    )
}

const Ths = ThsComponnet(ThsFunction);

const TdsComponent = (PassedComponent) => {
    return class extends React.Component{
        render(){
            return(
                <>
                    <PassedComponent {...this.props} />
                </>
            )
        }
    }
}

const TdsFunction = ({ values }) => {
    return (
        <tr>
            {values.map((value, index) => {
                return(
                    <td key={index}>
                        {value}
                    </td>
                )
            } )}
        </tr>
    )
}


const Tds = TdsComponent(TdsFunction)



const Table = ({titles,values}) => {

    return(
        <table>
            <thead>
                <Ths titles={titles} />
            </thead>
            <tbody>
                <Tds values={values}/>
            </tbody>
        </table>
    )
}



Table.propTypes = {
    titles: PropTypes.array,
    values: PropTypes.array
}

export default Table;
