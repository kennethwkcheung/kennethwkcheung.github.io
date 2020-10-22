import React from "react"
import Template from '../components/_layout/_template/template'

export default ({pageContext}) => {
    return (
        <Template>
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
        </Template >
    )
}