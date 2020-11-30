import React from 'react'
import Faicon from '../../../_icon/_faicon/faicon'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import defaultStyle from './userLogo.module.css'

export default ({userName}) => {

    return (
        <span className={`align-middle ${defaultStyle.default}`}><Faicon faID={faUserAstronaut} transformDetails={{}} /> {userName}</span>
    )
}