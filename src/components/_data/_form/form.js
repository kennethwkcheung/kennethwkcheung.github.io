import React, { useState } from "react";
import { useFormik } from 'formik';
import defaultStyle from './form.module.css'
import 'react-datepicker/dist/react-datepicker.css';

export default () => {
    return (
        <form>
            <div className="row">
                <div className={`col nopadding ${defaultStyle.default}`}>
                    POST FORM
                </div>
            </div>
        </form>
    )
}