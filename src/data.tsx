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
    description: "Vestibulum sollicitudin lobortis neque, ac vestibulum lorem pretium fringilla. Donec lorem nisi, vulputate luctus aliquet et, ornare at dui. Ut tristique malesuada pharetra. Curabitur quis molestie turpis. Aliquam vel odio non enim cursus sodales. Nunc id consequat lacus. Fusce elit augue, ultricies vel pharetra sed, tincidunt sed enim."
}

var item3:ItemProps = {
  altUrl: "/assets/logo.jpg",
  mainUrl: "/assets/logo.jpg",
  name: "Coming Soon",
  price: '69',
  description: "Vestibulum sollicitudin lobortis neque, ac vestibulum lorem pretium fringilla. Donec lorem nisi, vulputate luctus aliquet et, ornare at dui. Ut tristique malesuada pharetra. Curabitur quis molestie turpis. Aliquam vel odio non enim cursus sodales. Nunc id consequat lacus. Fusce elit augue, ultricies vel pharetra sed, tincidunt sed enim."
}

var OIM_Blue:ItemProps = {
  mainUrl: "/assets/OIM_Front(Blue).PNG",
  altUrl: "/assets/OIM_Back(Blue).PNG",
  name: "O.I.M. Sherpa",
  price: '200.00',
  description: "a cozy, elegant sherpa jacket \n \"only in moderation\", \nwe tend to do things in excess; \na calming reminder to slow it down \n\nMATERIAL:  \n* polyester fabric \n* embroidered lettering \n\nWASH INSTRUCTIONS: \n* Dry Clean Only"
}

var OIM_Black:ItemProps = {
  mainUrl: "/assets/OIM_Front(Black).PNG",
  altUrl: "/assets/OIM_Back(Black).PNG",
  name: "O.I.M. Sherpa",
  price: '200.00',
  description: "a cozy, elegant sherpa jacket \n \"only in moderation\", \nwe tend to do things in excess; \na calming reminder to slow it down \n\nMATERIAL:  \n* polyester fabric \n* embroidered lettering \n\nWASH INSTRUCTIONS: \n* Dry Clean Only"
}
  
export var clothes = {
    items: [
      OIM_Blue,
      OIM_Black
    ],
    cart: cartItems
}
  
export var art = {
    items: [
      item3
    ],
    cart: cartItems
}