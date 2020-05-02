import React from 'react';
import { Field, reduxForm } from 'redux-form';

let FormComponent = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="numberProducts">Number of Elements</label>
                <Field name={props.name}  component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent = reduxForm({ form: 'numberElements' })(FormComponent);

