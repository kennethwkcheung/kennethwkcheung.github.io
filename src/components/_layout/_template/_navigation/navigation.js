import React from 'react'
import BrandLogo from '../../_logo/_brand/brandLogo'
import Navbaritem from '../../../_navbaritem/navbaritem'
import { faBook, faChalkboardTeacher, faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

import defaultStyle from './navigation.module.css'

export default ({brandName}) => {

    return (
        <nav className={`navbar navbar-expand-sm ${defaultStyle.default} nopadding`}>
            <a className={`navbar-brand`} href="#"><BrandLogo brandName={brandName} /></a>
            <ul className={`navbar-nav`}>
                {/*
                    justify-content-center
                    <Navbaritem label={userName} url="/" faID={faUserAstronaut} />
                */}
                <Navbaritem label={`Blog`} url="/" faID={faBook} />
                <Navbaritem label={`Sharing`} url="/sharing" faID={faChalkboardTeacher} />
                <Navbaritem label={`Sketchbook`} url="/sketchbook" faID={faPhotoVideo} />
            </ul>
        </nav> 
    )
}