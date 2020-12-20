import * as React from 'react';
import '../style/shopItem.css'
import { Link } from 'react-router-dom'

export type ItemProps = {
    mainUrl: string,
    altUrl: string,
    name: string,
    price: string,
    size?: string,
    quantity?: string,
    description?: string,
}

 export const ShopItem = (props:ItemProps) => (
    <div>
        <Link to={{
            pathname: `/${props.name}`,
            state: {
                mainUrl: props.mainUrl,
                price: props.price,
                name: props.name,
                altUrl: props.altUrl,
                description: props.description
            },
        }} >
            <div className="imageContainer">
                <img className="item" src={props.mainUrl} alt={props.name}/>
                <img className="itemAlt" src={props.altUrl} alt={props.name}/>        
            </div>
        </Link>
    </div>
 )

 export default ShopItem