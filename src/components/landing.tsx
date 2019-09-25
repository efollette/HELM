import * as React from 'react'
import { Link } from 'react-router-dom'
import '../style/landing.css'

const Landing = () => (
    <div id="wrapper" className="skewed">
        <div className="layer bottom">
            <Link to="/lifestyle/">
                <div className="content-wrap">
                    <div className="content-body">
                        <p className="link">LIFESTYLE</p>
                    </div>
                </div>
            </Link>
        </div>
    
        <div className="layer top">
            <Link to="/clothing/">
                <div className="content-wrap">
                    <div className="content-body">
                        <p className="link">CLOTHING</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
)

export default Landing