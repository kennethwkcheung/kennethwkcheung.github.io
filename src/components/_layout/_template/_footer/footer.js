import React from 'react'
import BrandLogo from '../../_logo/_brand/brandLogo'
import defaultStyle from './footer.module.css'

export default ({children, brandName}) => {

    return (
        <div className={`container-fluid`}>
            { children }
            <div className={`row fixed-bottom ${defaultStyle.default} `}>
                <div className={`col-12`}>
                    <span className='align-middle'>&copy;&nbsp;Copyright&nbsp;2020&nbsp;<BrandLogo brandName={brandName} />.&nbsp;All rights reserved</span>
                </div>
                {children}
            </div>
        </div>
    )
}