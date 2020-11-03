import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './_header/header'
import Footer from './_footer/footer'
import Navigation from './_navigation/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGitkraken } from '@fortawesome/free-brands-svg-icons'

export default ({children}) => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    headerTitle,
                    blogTitle, 
                    author,
                    vision,
                    purpose
                }
            }
        }
    `)

    return ( 
        <div className='container-fluid'>
            <Helmet defer={false} >
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{ data.site.siteMetadata.headerTitle }</title>
            </Helmet>
            <Header blogTitle={ data.site.siteMetadata.blogTitle }>
                <div className='row'>
                    <div className={'col'}>
                        Vision: { data.site.siteMetadata.vision }
                    </div>
                </div>
                <div className='row'>
                    <div className={'col'}>
                        Purpose: { data.site.siteMetadata.purpose }
                    </div>
                </div>
            </Header>
            <Navigation />
            <div className='row'>
                <span style={{fontFamily:'Zilla Slab'}}>Zilla Slab : Content Style</span>
            </div>
            <div className='row'>
                <span style={{fontFamily:'Jaldi'}}>Marck Script : System Style - 503 Service Unavailable [CWK-001]</span>
            </div>
            {children}
            <Footer author={ data.site.siteMetadata.author }>
                <div className='row'>
                    <div className={'col'}>
                        <FontAwesomeIcon icon={faNodeJs} /> <FontAwesomeIcon icon={faNpm} /> <FontAwesomeIcon icon={faJs} /> 
                        <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faMarkdown} /> 
                        <FontAwesomeIcon icon={faBootstrap} /> <FontAwesomeIcon icon={faSass} /> <FontAwesomeIcon icon={faFortAwesome} /> 
                        <FontAwesomeIcon icon={faGitAlt} /> <FontAwesomeIcon icon={faGithub} /> <FontAwesomeIcon icon={faGitkraken} /> 
                    </div>
                </div>
            </Footer>
        </div>
    )
}