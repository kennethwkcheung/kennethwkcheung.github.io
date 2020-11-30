import React from 'react';
import { Client } from 'elasticsearch'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Datepicker from '../_formField/_datepicker/datepicker';
import { format } from 'date-fns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import defaultStyle from './form.module.css'

export default () => {

    return (
        <div className={`row ${defaultStyle.default}`}>
            <div className='container-fluid'>
                <Formik
                    initialValues={ {
                        datePublished: new Date(),
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
                        let sysdate = format(new Date(), 'yyyy-MM-dd')
                        console.log(sysdate);
                        console.log(JSON.stringify(values));

                        if(false) {
                            const elasticJsClient = new Client({ node: 'http://127.0.0.1:9200' });

                            let payload = {
                                "dateCreated": "20201118",
                                "dateLastUpdated": "20201118",
                                "datePublished": "20201118",
                                "accessLevel": "public",
                                "subtitle": "subtitle of 20201118",
                                "contents": "20201118"
                            }

                            /*
                            elasticJsClient.ping({
                                requestTimeout: Infinity,
                            }, function (error) {
                                if (error) {
                                    // TODO: ERROR HANDLING
                                    console.trace('elasticsearch cluster is down!');
                                } else {
                                    // TODO: ADD BLOG POST
                                    console.log('elasticsearch cluster is well!');
                                }
                            });
                            */
                        
                            elasticJsClient.index({
                                index: "blog-post",
                                type: "md",
                                refresh: true,
                                body: payload
                            }).then(function (resp) {
                                console.log('DONE');
                            }, function (err) {
                                console.log(err.message);
                            });
                        }
                    } }
                >
                    <Form>
                        <div className='row'>
                            <div className={'col col-sm-12'}>
                                POST Form <FontAwesomeIcon icon={faKeyboard} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-4'}>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className={'col col-sm-3'}>
                                            <label htmlFor='title'>Title</label>
                                        </div>
                                        <div className={'col col-sm-9'}>
                                            <Field name='title' type='text' placeholder='title' />
                                            <ErrorMessage name='title' render={msg => <span className='err'>{msg}</span>} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={'col col-sm-3'}>
                                            <label htmlFor='contents'>Contents</label>
                                        </div>
                                        <div className={'col col-sm-9'}>
                                            <Field name='contents' as='textarea' placeholder='contents' />
                                            <ErrorMessage name='contents' render={msg => <span className='err'>{msg}</span>} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={'col col-sm-3'}>
                                            <label htmlFor='accessLevel'>Access Level</label>
                                        </div>
                                        <div className={'col col-sm-9'}>
                                            <Field name='accessLevel' as='select'>
                                                <option value='public'>Public</option>
                                                <option value='private'>Private</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className={'col col-sm-3'}>
                                            <label htmlFor='accessLevel'>Tags</label>
                                        </div>
                                        <div className={'col col-sm-9'}>
                                            TAG LIST
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col col-sm-8'}>
                                <Datepicker name='datePublished' />
                                * Date Published
                                <ErrorMessage name='datePublished' render={msg => <span className='err'>{msg}</span>} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-12'}>&nbsp;</div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-4'} />
                            <div className={'col col-sm-8'}>
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={'col col-sm-12'}>&nbsp;</div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}