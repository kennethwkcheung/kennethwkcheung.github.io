import React from 'react'
import { Link } from 'gatsby'
import Faicon from '../_icon/_faicon/faicon'

export default ({label, url, faID}) => {

    return (    
        <li className={`nav-item`}>
            <Link className={`nav-link`} to={url}><Faicon faID={faID} /> {label}</Link>
        </li>
    )
}