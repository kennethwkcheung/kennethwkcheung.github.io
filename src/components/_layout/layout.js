// Default JS Library
import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// Components
import Header from '../_header/header'
import Footer from '../_footer/footer'
import Map from '../_map/map'

export default ({children}) => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    headerTitle
                }
            }
        }
    `)

    return ( 
        <div className="container-fluid">
            <Helmet defer={false} >
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{ data.site.siteMetadata.headerTitle }</title>
            </Helmet>
            <Header />
            <Map />
            {children}
            <Footer />
        </div>
    )
}