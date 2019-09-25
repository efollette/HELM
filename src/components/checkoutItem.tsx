import * as React from 'react'
import { ItemProps } from './shopItem'
import '../style/checkoutItem.css'

interface CheckoutItemProps {
    item: ItemProps, 
    add: CallableFunction,
    remove: CallableFunction,
    removeOne: CallableFunction,
}

export const CheckoutItem = ( props: CheckoutItemProps ) => {
    function handleChange(e: any) {
       
        props.removeOne(props.item, e.currentTarget.value)
    }
    return (
        <div className="chktItm">
            <div className="chktImgNmSz">
                <img className="chktImg" src={props.item.mainUrl}></img>
                <div className="chktNmSz">
                    <div>{props.item.name}</div>
                    <div>Size: {props.item.size}</div>
                </div>
            </div>
            <div className="chktQtyPrice">
                <div className="chktPrice">
                    ${(+props.item.price)*(+props.item.quantity)}.00
                </div>
                <div className="chktItmQty">
                    QTY 
                    <input type="number" defaultValue={props.item.quantity} onChange={handleChange}/>
                </div>
                <button className="removeCheckout" onClick={() => props.remove(props.item)}>
                    Remove
                </button>
            </div>
        </div>
    )
}