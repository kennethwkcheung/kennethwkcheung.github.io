import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/_layout/layout'
import Postnone from '../components/_postnone/postnone'

export default ({pageContext}) => {
    let postList = pageContext.data.allMarkdownRemark.edges;
    let postTotal = postList.length;

    if(postTotal === 0) {
        return <Postnone />
    }
    
    let postLinks = postList.map( (record) => {
        return (
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>
                    <Link to={`/posts/${ record.node.frontmatter.datePublished }`}>
                        { record.node.frontmatter.datePublished }
                    </Link>
                </span>
                &nbsp;
                <span style={{fontFamily:'Zilla Slab'}}>{ record.node.frontmatter.tags }</span>
            </div>
        )
    })

    return (
        <Layout>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>POST TOTAL: { postTotal }</span>
            </div>
            { postLinks }
        </Layout >
    )
}