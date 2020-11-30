import React from 'react'
import BrandLogo from '../../_logo/_brand/brandLogo'
import defaultStyle from './brandbar.module.css'

export default ({children, brandName}) => {

    return (
        <div className={`container-fluid`}>
            <div className={`row ${defaultStyle.default}`}>
                <div className={`col-12`}>
                    <BrandLogo brandName={brandName} />
                </div>
                {children}
            </div>
        </div>
    )
}