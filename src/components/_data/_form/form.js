import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Datepicker from '../_formField/_datepicker/datepicker';

import defaultStyle from './form.module.css'

export default () => {

    return (
        <div className={`row ${defaultStyle.default}`}>
            <div className='container-fluid'>
                <Formik
                    initialValues={ {
                        datePublished: '',
                        title: '',
                        contents: '',
                        accessLevel: 'public'
                    } }
                    validationSchema={ Yup.object({
                        datePublished: Yup.string().required('* Required'),
                        title: Yup.string().required('* Required'),
                        contents: Yup.string().required('* Required'),
                        accessLevel: Yup.string().required('* Required')
                    }) }
                    onSubmit={ (values) => {
                        alert(JSON.stringify(values, null, 2));
                    } }
                >
                    <Form>
                        <div className='row'>
                            <div className={'col col-sm-2'}>
                                <label htmlFor='datePublished'>Date Published</label>
                            </div>
                            <div className={'col col-sm-10'}>
                                <Datepicker name='datePublished' />
                                <ErrorMessage name='datePublished' render={msg => <span className='err'>{msg}</span>} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-2'}>
                                <label htmlFor='title'>Title</label>
                            </div>
                            <div className={'col col-sm-10'}>
                                <Field name='title' type='text' placeholder='title' />
                                <ErrorMessage name='title' render={msg => <span className='err'>{msg}</span>} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-2'}>
                                <label htmlFor='contents'>Contents</label>
                            </div>
                            <div className={'col col-sm-10'}>
                                <Field name='contents' as='textarea' placeholder='contents' />
                                <ErrorMessage name='contents' render={msg => <span className='err'>{msg}</span>} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-2'}>
                                <label htmlFor='accessLevel'>Access Level</label>
                            </div>
                            <div className={'col col-sm-10'}>
                                <Field name='accessLevel' as='select'>
                                    <option value='public'>Public</option>
                                    <option value='private'>Private</option>
                                </Field>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-2'} />
                            <div className={'col col-sm-10'}>
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}