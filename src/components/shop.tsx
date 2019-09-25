import * as React from 'react'
import { ShopItem, ItemProps } from './shopItem'
import { ShopHeader } from './shopHeader'
import { ShopFooter } from './shopFooter'
import { CartProps } from './main'
import '../style/shop.css'

export interface ShopProps {
    items: ItemProps[],
    cart: CartProps,
}

export const Shop = (props: ShopProps) => (
    <div className="shopContainer">
        <header className="videoHeader">
            <ShopHeader items={props.cart.items}/>
            <div className="titleWrapper">
                <div className="shopTitle">
                    HEARTEYESLUNGSMIND
                </div>
            </div>
        </header>
        <section>
            <div className="shopContent" id='shopContent'>
                {props.items.map( (contents) => 
                    <div className="item">
                        <ShopItem {...contents}/>
                    </div>
                )}
            </div>
        </section>
        <ShopFooter />
    </div>
)

export default Shop