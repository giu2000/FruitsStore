import React from 'react';
import { Field, reduxForm } from 'redux-form';

let FormComponent = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="numberProducts">Number of Elements</label>
                <Field name="numberProducts"  component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

//create new configured function
const createReduxForm = reduxForm({ form: 'numberElements' })

//eaeluate it for ContactForm componenent
FormComponent = createReduxForm(FormComponent);

export default FormComponent;
