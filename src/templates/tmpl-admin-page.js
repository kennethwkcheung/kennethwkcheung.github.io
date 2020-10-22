import React from "react"

import Template from '../components/_layout/_template/template'
import Form from '../components/_data/_form/form'

export default ({pageContext}) => {
    return (
        <Template>
            <div className="row">
                ADMIN PAGE
            </div>
            <Form />
        </Template >
    )
}