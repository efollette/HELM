import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Checkout from './checkout'
import Intro from './intro'
import Landing from './landing'
import { Cart } from './cart'
import { Shop } from './shop'
import { ItemProps } from './shopItem'
import {ItemPage} from './itemPage'
import { clothes, art } from '../data'

export type CartProps = {
  items: ItemProps[],
  add?: CallableFunction,
  remove?: CallableFunction,
  removeOne?: CallableFunction,
  total?: number
}

class Main extends React.Component<{}, CartProps> {

  constructor(props: CartProps) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
    this.state = {
      items: [],
      total: 0
    }
  }

  calculateTotal() {
    var tot = 0
    for( let cartItem of this.state.items ) {
      tot += (+cartItem.price) * (+cartItem.quantity)
    }
    this.setState({
      total: tot
    })
  }

  addToCart( item: ItemProps ) {
    var addToCart = true
    var qtyCart = this.state.items.slice()
    for( let cartItem of this.state.items ) {
      if ( cartItem.name == item.name && cartItem.size == item.size ) {
        var itemQty = +cartItem.quantity
        itemQty = itemQty + 1
        qtyCart[this.state.items.indexOf(cartItem)].quantity = itemQty.toString() 
        this.setState({
          items: qtyCart
        })
        addToCart = false
        break
      }
    }
    if( addToCart ) {
      this.state.items.push(item)
      this.setState({
        items: this.state.items
      })
    }
    this.calculateTotal()
  }

  setQuantity( item: ItemProps, qty: number ) {
    var qtyCart = this.state.items.slice()
    for( let cartItem of this.state.items ) {
      if ( cartItem.name == item.name && cartItem.size == item.size ) {
        qtyCart[this.state.items.indexOf(cartItem)].quantity = qty.toString() 
        this.setState({
          items: qtyCart
        })
        break
      }
    }
    this.calculateTotal()
  }

  removeFromCart( item: ItemProps ) {
    this.state.items.splice(this.state.items.indexOf(item), 1)
    this.setState({
      items: this.state.items
    })
    this.calculateTotal()
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route path='/landing' component={Landing}/>
          <Route path='/clothing' render={ () => <Shop {...clothes} cart={{items: this.state.items}}/>}/>
          <Route path='/lifestyle' render={() => <Shop {...art} cart={{items: this.state.items}}/>}/>
          <Route path='/cart' render={() => <Cart items={this.state.items} add={this.addToCart} remove={this.removeFromCart} removeOne={this.setQuantity} total={this.state.total}/>}/>
          <Route path='/checkout' render={() => <Checkout items={this.state.items} add={this.addToCart} remove={this.removeFromCart} removeOne={this.setQuantity} total={this.state.total}/>}/>
          <Route path='/:article' render={(props) => <ItemPage {...props} action={this.addToCart} cart={{items: this.state.items}}/>}/>
        </Switch>
      </main>
    )
  }
}

export default Main