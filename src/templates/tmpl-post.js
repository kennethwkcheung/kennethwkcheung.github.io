import React from "react"
import Layout from '../components/_layout/layout'

export default ({pageContext}) => {
    return (
        <Layout>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>{ pageContext.dateCreated }</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>{ pageContext.dateLastUpdated }</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>{ pageContext.title }</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>{ pageContext.content }</span>
            </div>
        </Layout >
    )
}