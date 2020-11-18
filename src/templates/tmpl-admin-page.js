import React from "react"

import Template from '../components/_layout/_template/template'
import Form from '../components/_data/_form/form'            

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle, faGlobeAsia, faDatabase, faFile, faArchive, faSearch, faTags, faBox } from '@fortawesome/free-solid-svg-icons'

export default ({pageContext}) => {

    return (
        <Template>
            <div className='row pt-2 pb-2'>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faDatabase } />&nbsp;FLOOD
                </div>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faFile } />&nbsp;FILE
                </div>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faArchive } />&nbsp;PACK
                </div>
                <div className={'col col-sm-6 d-flex justify-content-center'}>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={ faGlobeAsia } spin color="#AAAAAA" />
                        <FontAwesomeIcon icon={ faSpaceShuttle } transform={{ rotate:315 }} color="#000000" />
                    </span>
                    ADMIN PAGE
                </div>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faTags } />&nbsp;TAGS
                </div>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faSearch } />&nbsp;SEARCH
                </div>
                <div className={'col col-sm-1 d-flex justify-content-center'}>
                    <FontAwesomeIcon icon={ faBox } />&nbsp;BULK
                </div>
            </div>
            <Form />
        </Template >
    )
}