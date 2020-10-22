import React from 'react'
import defaultStyle from './footer.module.css'

export default () => (
    <footer>
        <div className="row">
            <div className={`col nopadding ${defaultStyle.default}`}>
                BLOG FOOTER
            </div>
        </div>
    </footer>
)