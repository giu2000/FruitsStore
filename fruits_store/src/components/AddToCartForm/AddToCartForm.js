import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../Button';

const parseInputToNumber = value => value ? parseInt(value) : 0;

let AddToCartForm = props => {
    const { handleSubmit, name } = props;
    return (
        <div >
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
                <span>
                    <Button
                        text="Add"
                        type="submit"
                    />
                </span>
            </form>
        </div>
    )
}

export default AddToCartForm = reduxForm({ form: 'numberElements' })(AddToCartForm);

