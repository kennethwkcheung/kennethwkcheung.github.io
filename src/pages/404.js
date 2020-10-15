// Default JS Library
import React from "react"
import { Helmet } from 'react-helmet'

// Default CSS Library
import 'bootstrap/dist/css/bootstrap.min.css'
import "normalize.css"

export default () => {
    return ( 
        <div className="container-fluid">
            <Helmet defer={false} >
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>kennethwkcheung.github.io</title>
            </Helmet>
            <div className="row">
                404 Page Not Found [CWK-002]
            </div>
        </div>
    )
}