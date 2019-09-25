import * as React from 'react'
import { Link } from 'react-router-dom'
import { CartProps } from './main'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/StoreHeader.css'


export const ShopHeader = ( props: CartProps ) => (
    <div className="nav-header-content">
        <Link to="/">
            <h1>HELM</h1>
        </Link>
        <nav className="nav">
            <ul>
                <Link to="/clothing">
                    <li className="nav-li">Clothing</li>
                </Link>
                <Link to="/lifestyle">
                    <li className="nav-li">Lifestyle</li>
                </Link>
                <Link to="/cart">
                    <li className="cartIcon">
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        {props.items.length}
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
)