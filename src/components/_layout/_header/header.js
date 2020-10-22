import React from 'react'
import defaultStyle from './header.module.css'

export default () => (
    <header>
        <div className="row">
            <div className={`col nopadding ${defaultStyle.default}`}>
                BLOG HEADER
            </div>
        </div>
    </header>
)