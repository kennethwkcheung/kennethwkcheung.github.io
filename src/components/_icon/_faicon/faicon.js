import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({faID, transformDetails}) => {

    return (
        <FontAwesomeIcon icon={faID} transform={transformDetails} />
    )
}