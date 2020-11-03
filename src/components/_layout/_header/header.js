import React from 'react'

import defaultStyle from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

export default ({children, blogTitle}) => {

    return (
        <div className={`row ${defaultStyle.default}`}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={'col'}>
                        <span className='align-middle'><FontAwesomeIcon icon={faSpaceShuttle} transform={{ rotate:315 }} /> { blogTitle }</span>
                    </div>
                </div>
                { children }
            </div>
        </div>
    )
}