import * as React from 'react'
import { CartProps } from './main'
import { Link } from 'react-router-dom'
import { ShopHeader } from './shopHeader'
import { ShopFooter } from './shopFooter'
import { CartItem } from './cartItem'
import '../style/cart.css'

export const Cart = ( cart: CartProps ) => (
    <div className="cartContainer">
        <header className="shopHeader">
            <ShopHeader items={cart.items}/>
        </header>
        <section>
            <div className="cartPage">
                <h1 className="cartTitle">SHOPPING CART</h1>
                <div className="cartContents">
                    <table className="table">
                        <tbody>
                            <tr className="cartHeader">
                                <th className="itemTableHeader">Remove</th>
                                <th className="itemTableHeader">Item</th>
                                <th>Qty.</th>
                                <th>Price</th>
                            </tr>
                            {cart.items.map( (contents) => 
                                <CartItem item={contents} remove={cart.remove} add={cart.add} removeOne={cart.removeOne} />
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="subtotal">Subtotal: ${cart.total}</div>
                <button className="button3"><Link to='/checkout'>Checkout</Link></button>
            </div>
        </section>
        <ShopFooter />
    </div>
)