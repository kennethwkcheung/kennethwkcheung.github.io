import React from 'react'

import defaultStyle from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
// import { faJava } from '@fortawesome/free-brands-svg-icons'
// import { faGitlab } from '@fortawesome/free-brands-svg-icons'
// import { faDocker } from '@fortawesome/free-brands-svg-icons'
// import { faLinux } from '@fortawesome/free-brands-svg-icons'
// import { faTypo3 } from '@fortawesome/free-brands-svg-icons'
// import { Button } from 'reactstrap';
// import { Navbar } from 'reactstrap';

export default ({children, author}) => {

    return (
        <div className={`row ${defaultStyle.default}`}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={'col'}>
                        <span className='align-middle'>&copy;&nbsp;Copyright&nbsp;2020&nbsp;<FontAwesomeIcon icon={faUserAstronaut} />&nbsp;{ author }.&nbsp;All rights reserved</span>
                    </div>
                </div>
                { children }
            </div>
        </div>
    )
}