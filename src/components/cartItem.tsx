import * as React from 'react'
import { ItemProps } from './shopItem'
import '../style/cartItem.css'

interface CartItemProps {
    item: ItemProps, 
    add: CallableFunction,
    remove: CallableFunction,
    removeOne: CallableFunction,
}

export const CartItem = ( props: CartItemProps ) => {
    
    function handleChange(e: any) {

        props.removeOne(props.item, e.currentTarget.value)

    }

    return (
        <tr className="cartItem">
            <td className="remove">
                <button className="removeBtn" onClick={() => props.remove(props.item)}>X</button>
            </td>
            <td className="imageNameSize">
                <img className="cartImage" src={props.item.mainUrl} alt="Streetware, Clothing, Heart Eyes Lungs Mind, H.E.L.M, D.M.V, Clothes"></img>
                <div className="itemNameSize">
                    {props.item.name} <br></br>
                    Size: {props.item.size}
                </div>
            </td>
            <td className="cartItemQty">
                <input className="qtyControl" type="number" defaultValue={props.item.quantity} onChange={handleChange} onInput={handleChange}/>
            </td>
            <td className="cartPrice">
                {(+props.item.price)*(+props.item.quantity)}
            </td>
        </tr>
    )
}