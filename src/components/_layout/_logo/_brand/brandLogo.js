import React from 'react'
import Faicon from '../../../_icon/_faicon/faicon'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

export default ({brandName}) => {

    return (
        <span>
            <Faicon faID={faSpaceShuttle} transformDetails={{ rotate:315 }} /> { brandName }
        </span>
    )
}