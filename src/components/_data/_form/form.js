import React from 'react';
import { useFormik } from 'formik';
import defaultStyle from './form.module.css'
import 'react-datepicker/dist/react-datepicker.css';

export default () => {
    const formik = useFormik({
        initialValues: { email: '' },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={ formik.handleChange } value={ formik.values.email } />
            <button type="submit">Submit</button>
        </form>
    )
}