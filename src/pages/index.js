// Default JS Library
import React from "react"
import { Helmet } from 'react-helmet'

// Default CSS Library
import 'bootstrap/dist/css/bootstrap.min.css'
import "normalize.css"

// ICON List
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
import { faWindows } from '@fortawesome/free-brands-svg-icons'
// import { faJava } from '@fortawesome/free-brands-svg-icons'
// import { faGitlab } from '@fortawesome/free-brands-svg-icons'
// import { faDocker } from '@fortawesome/free-brands-svg-icons'
// import { faLinux } from '@fortawesome/free-brands-svg-icons'
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons'
// import { Button } from 'reactstrap';
// import { Navbar } from 'reactstrap';

// Default Font
import "fontsource-jaldi"
import "fontsource-zilla-slab"

export default () => {
    return ( 
        <div className="container-fluid">
            <Helmet defer={false} >
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>kennethwkcheung.github.io</title>
            </Helmet>
            <div className="row">
                <FontAwesomeIcon icon={faNodeJs} /> <FontAwesomeIcon icon={faNpm} /> <FontAwesomeIcon icon={faJs} /> 
                <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faMarkdown} /> 
                <FontAwesomeIcon icon={faBootstrap} /> <FontAwesomeIcon icon={faSass} /> <FontAwesomeIcon icon={faFortAwesome} /> 
                <FontAwesomeIcon icon={faGitAlt} /> <FontAwesomeIcon icon={faGithub} /> <FontAwesomeIcon icon={faGitkraken} /> 
                <FontAwesomeIcon icon={faWindows} />
            </div>
            <div className="row">
                <span style={{fontFamily:'Zilla Slab'}}>Zilla Slab : Content Style</span>
            </div>
            <div className="row">
                <span style={{fontFamily:'Jaldi'}}>Marck Script : System Style - 503 Service Unavailable [CWK-001]</span>
            </div>
        </div>
    )
}