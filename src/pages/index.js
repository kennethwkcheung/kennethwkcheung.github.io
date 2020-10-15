import React from "react"
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';

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

export default () => {
    return ( 
        <span>
            <Helmet title="kennethwkcheung.github.io" defer={false} />
            <FontAwesomeIcon icon={faNodeJs} /> <FontAwesomeIcon icon={faNpm} /> <FontAwesomeIcon icon={faJs} /> 
            <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faMarkdown} /> 
            <FontAwesomeIcon icon={faBootstrap} /> <FontAwesomeIcon icon={faSass} /> <FontAwesomeIcon icon={faFortAwesome} /> 
            <FontAwesomeIcon icon={faGitAlt} /> <FontAwesomeIcon icon={faGithub} /> <FontAwesomeIcon icon={faGitkraken} /> 
            <FontAwesomeIcon icon={faWindows} /> 503 Service Unavailable [CWK-001]
        </span>
    )
}