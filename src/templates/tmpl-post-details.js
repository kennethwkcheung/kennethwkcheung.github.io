import React from "react"
import Layout from '../components/_layout/layout'

export default ({pageContext}) => {
    return (
        <Layout>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>Date created: { pageContext.dateCreated }</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>Date last updated: { pageContext.dateLastUpdated }</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>Post sub title: { pageContext.subtitle }</span>
            </div>
            <div className={'row content-post'}>
                <span style={{fontFamily:'Zilla Slab'}} dangerouslySetInnerHTML={{ __html:pageContext.content }} />
            </div>
        </Layout >
    )
}