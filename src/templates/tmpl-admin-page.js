import React from "react"

import Template from '../components/_layout/_template/template'
import Form from '../components/_data/_form/form'            

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

export default ({pageContext}) => {
    const elastic='http://127.0.0.1:9200'
    
    return (
        <Template>
            <div className='row'>
                <div className={'col col-sm-4'}>
                    LEFT
                </div>
                <div className={'col col-sm-4'}>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faGlobeAsia} spin color="#CCCCCC" />
                        <FontAwesomeIcon icon={ faSpaceShuttle } transform={{ rotate:315 }} color="#666666" />
                    </span>
                    ADMIN PAGE
                </div>
                <div className={'col col-sm-4'}>
                    RIGHT
                </div>
            </div>
            <Form />
        </Template >
    )
}