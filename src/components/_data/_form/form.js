import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import defaultStyle from './form.module.css'
import 'react-datepicker/dist/react-datepicker.css';

export default () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            datePublished: '',
            accessLevel: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    });

    return (
        <div className={`row ${defaultStyle.default}`}>
            <div className='container-fluid'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className={'col col-sm-2'}>
                            <label htmlFor='datePublished'>Publishing Date</label>
                        </div>
                        <div className={'col col-sm-10'}>
                            <input id='datePublished' name='datePublished' type='text' onChange={ formik.handleChange } value={ formik.values.datePublished } />
                        </div>
                    </div>
                    <div className='row'>
                        <div className={'col col-sm-2'}>
                            <label htmlFor='accessLevel'>Access level</label>
                        </div>
                        <div className={'col col-sm-10'}>
                            <select name='accessLevel' id='accessLevel' onChange={ formik.handleChange } value={ formik.values.accessLevel }>
                                <option value='public'>Public</option>
                                <option value='private'>Private</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={'col col-sm-2'}>
                        </div>
                        <div className={'col col-sm-10'}>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}