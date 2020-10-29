import React from "react"
import { Link } from 'gatsby'

import Template from '../components/_layout/_template/template'

export default ({pageContext}) => {
    let postList = pageContext.data.allMarkdownRemark.edges;
    let postTotal = postList.length;
    let postLinks = postList.map( (record) => {
        let tagList = record.node.frontmatter.tags;
        return (
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>
                    <Link to={`${ record.node.fields.slug }`}>
                        { record.node.frontmatter.datePublished }
                    </Link>
                </span>
                &nbsp;
        <span style={{fontFamily:'Zilla Slab'}}>{ tagList }</span>
            </div>
        )
    })

    return (
        <Template>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>POST TOTAL: { postTotal }</span>
            </div>
            { postLinks }
        </Template >
    )
}