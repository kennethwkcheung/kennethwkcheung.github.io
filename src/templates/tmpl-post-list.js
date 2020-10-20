import React from "react"
import Layout from '../components/_layout/layout'
import Postnone from '../components/_postnone/postnone'

export default ({pageContext}) => {
    let postTotal = pageContext.data.allMarkdownRemark.edges.length;
    if(postTotal === 0) {
        return <Postnone />
    }

    return (
        <Layout>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>POST LIST: { postTotal }</span>
            </div>
        </Layout >
    )
}