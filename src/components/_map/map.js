import React from 'react'
import { Link } from 'gatsby'

import defaultStyle from './map.module.css'

export default () => (
    <map>
        <div className="row">
            <div className={`col nopadding ${defaultStyle.default}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col nopadding"><Link to="/">Home</Link></div>
                    </div>
                    <div className="row">
                        <div className="col nopadding"><Link to="/about/">About</Link></div>
                    </div>
                    <div className="row">
                        <div className="col nopadding"><Link to="/posts/">Posts</Link></div>
                    </div>
                    <div className="row">
                        <div className="col nopadding"><Link to="/sketchbook/">Sketchbook</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </map>
)