import React from 'react'
import UserLogo from '../../_logo/_user/userLogo'
import defaultStyle from './header.module.css'

export default ({children, userName, blogTitle, subTitle}) => {

    return (
        <div className={`container-fluid ${defaultStyle.default}`}>
            <div className={`row`}>
                <div className={`col-12`}><UserLogo userName={userName} /></div>
            </div>
            <div className={`row`}>
                <div className={`col-12`}>{blogTitle}</div>
            </div>
            <div className={`row`}>
                <div className={`col-12`}>{subTitle}</div>
            </div>
            { children }
        </div>
    )
}