import React from 'react';
import { Field, reduxForm } from 'redux-form';

const parseInputToNumber = value => value ? parseInt(value) : 0;

let FormComponent = props => {
    const { handleSubmit, name } = props;
    return (
        <div style={{outline: '1px solid black', margin:'1%'}}>
            <form onSubmit={handleSubmit} className='row'>
                <div>
                    <Field
                        name={name}
                        component="input"
                        type="number"
                        placeholder="Enter numbers"
                        normalize={parseInputToNumber}
                    />
                </div>
                <div>
                    <button type="submit">Add to cart</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent = reduxForm({ form: 'numberElements' })(FormComponent);

// <label htmlFor="numberProducts"></label>

