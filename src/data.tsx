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
  
var item2:ItemProps = {
    altUrl: "https://image.dhgate.com/0x0/f2/albu/g7/M01/FC/FB/rBVaSlq1HbKAWpGQAAKdnZLWqBA289.jpg",
    mainUrl: "https://www.dhresource.com/0x0/f2/albu/g7/M01/B4/65/rBVaSlq1HX-Abt7iAAD4bqcr8VY086.jpg",
    name: "B-Shirt",
    price: "45",
}

var item3:ItemProps = {
  altUrl: "https://res.cloudinary.com/teepublic/image/private/s--wRhPQG6b--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_244/c_crop,g_north_west,h_626,w_470,x_-113,y_-27/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-508,y_-352/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1449710548/production/designs/368038_1.jpg",
  mainUrl: "https://res.cloudinary.com/teepublic/image/private/s--wRhPQG6b--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_244/c_crop,g_north_west,h_626,w_470,x_-113,y_-27/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-508,y_-352/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1449710548/production/designs/368038_1.jpg",
  name: "SuPrime Shirt",
  price: '45'
}
  
export var clothes = {
    items: [
      item1, item2, item3
    ],
    cart: cartItems
}
  
export var art = {
    items: [
      item1
    ],
    cart: cartItems
}