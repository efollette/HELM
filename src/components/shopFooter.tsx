import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import '../style/shopFooter.css'

export const ShopFooter = () => (
    <footer className="footer">
        <nav>
            <ul>
                <a href="https://www.instagram.com/helm.us/">
                    <li>
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </li>
                </a>
                <a href="mailTo:helmstreetwear@gmail.com">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </li>
                </a>
            </ul>
        </nav>
        <div className="info">
            <p>HELM ✪ 1919</p>
        </div>
    </footer>
)