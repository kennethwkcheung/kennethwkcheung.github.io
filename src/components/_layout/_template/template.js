import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Brandbar from './_brandbar/brandbar'
import Header from './_header/header'
import Footer from './_footer/footer'
import Navigation from './_navigation/navigation'

export default ({children}) => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    headerTitle,
                    blogTitle, 
                    brandName,
                    author,
                    vision,
                    purpose
                }
            }
        }
    `)

    return ( 
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <Helmet defer={false} >
                        <meta charSet='utf-8' />
                        <meta name='viewport' content='width=device-width, initial-scale=1' />
                        <title>{ data.site.siteMetadata.headerTitle }</title>
                    </Helmet>
                    { children }
                    {/*
                    <Header userName={data.site.siteMetadata.author} blogTitle={ data.site.siteMetadata.vision } subTitle={data.site.siteMetadata.purpose} />
                    <Navigation brandName={data.site.siteMetadata.brandName} />
                    <Brandbar brandName={data.site.siteMetadata.brandName} />
                    <Footer brandName={ data.site.siteMetadata.brandName }/>
                    */}
                </div>
            </div>
        </div>
    )
}