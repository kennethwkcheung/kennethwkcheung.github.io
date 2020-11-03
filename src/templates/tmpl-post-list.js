import React from 'react'
import { Link } from 'gatsby'

import Template from '../components/_layout/_template/template'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

export default ({pageContext}) => {
    let postList = pageContext.data.allMarkdownRemark.edges;
    let postTotal = postList.length;
    let postLinks = postList.map( (record) => {
        const tagList = []
        record.node.frontmatter.tags.forEach((tag)=>{
            tagList.push(<span style={{fontFamily:'Zilla Slab'}}><FontAwesomeIcon icon={faFeatherAlt}/>{tag}&nbsp;</span> )
        })

        return (
            <div className='row'>
                <span style={{fontFamily:'Zilla Slab'}}>
                    <Link to={`${ record.node.fields.slug }`}>
                        { record.node.frontmatter.datePublished }
                    </Link>
                </span>
                &nbsp;
                { tagList }
            </div>
        )
    })

    return (
        <Template>
            <div className='row'>
                <span style={{fontFamily:'Zilla Slab'}}>POST TOTAL: { postTotal }</span>
            </div>
            { postLinks }
        </Template >
    )
}