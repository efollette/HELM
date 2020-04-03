import { ItemProps } from './components/shopItem'
import { CartProps } from './components/main'

var cartItems:CartProps = {
    items: []
}
  
var item1:ItemProps = {
    mainUrl: "https://image.dhgate.com/0x0/f2/albu/g7/M01/FC/FB/rBVaSlq1HbKAWpGQAAKdnZLWqBA289.jpg",
    altUrl: "https://www.dhresource.com/0x0/f2/albu/g7/M01/B4/65/rBVaSlq1HX-Abt7iAAD4bqcr8VY086.jpg",
    name: "Shirt",
    price: "45",
}

var item3:ItemProps = {
  altUrl: "/assets/logo.jpg",
  mainUrl: "/assets/logo.jpg",
  name: "Coming Soon",
  price: '69'
}
  
export var clothes = {
    items: [
      item1
    ],
    cart: cartItems
}
  
export var art = {
    items: [
      item3
    ],
    cart: cartItems
}