import React from 'react'
import defaultStyle from './index.module.css'
import { VerticalTimeline, VerticalTimelineElement, SchoolIcon }  from 'react-vertical-timeline-component';

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

export default () => {

    return (
        <div className={`container-fluid ${defaultStyle.default}`}>
            <div className={`row`}>
                <div className={`col-6`}>
                    USER_LETTER
                </div>
                <div className={`col-6 default-timeline-background`}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: '#FFFFFF', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title">Title</h3>
                            <h4 className="vertical-timeline-element-subtitle">SubTitle</h4>
                            <p>Details</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}