import React from 'react';
import { useField, useFormikContext } from "formik";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

{/*https://reactdatepicker.com*/}
export default ( {...props} ) => {
    const { setFieldValue } = useFormikContext();
    const [ field ] = useField(props);

    return (
        <DatePicker
            inline
            monthsShown={2}
            selected={ (field.value && new Date(field.value)) || null }
            onChange={ val => { setFieldValue(field.name, val) }}
        />
    )
}