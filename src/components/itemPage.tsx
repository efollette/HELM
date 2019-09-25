import * as React from 'react'
import { CartProps } from './main'
import { ShopHeader } from './shopHeader'
import { ShopFooter } from './shopFooter'
import { RouteComponentProps } from "react-router-dom";
import { ItemProps } from './shopItem'
import '../style/itemPage.css'

export interface Props extends RouteComponentProps<ItemProps> {}

interface Actions {
    action: CallableFunction,
    cart: CartProps,
}

export class ItemPage extends React.Component<Props & Actions, {size: string}> {

    constructor(props: any) {
        super(props)
        this.state = {
            size: 'Select'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({size: event.target.value});
    }

    addItem() {
        if( this.state.size != 'Select' ) {
            // Create a cart item
            var item: ItemProps = {
                mainUrl: this.props.location.state.mainUrl,
                altUrl: this.props.location.state.altUrl,
                name: this.props.location.state.name,
                price: this.props.location.state.price,
                size: this.state.size,
                quantity: "1"
            }
            // Add item to cart
            this.props.action(item)
        }
    }

    render() {
        return ( 
            <div className="shopContainer">
                <header className="shopHeader">
                    <ShopHeader items={this.props.cart.items}/>
                </header>
                <section>
                    <div className="itemPage">
                        <div className="images">
                            <img className="pic itemMain" src={this.props.location.state.mainUrl}></img>
                            <img className="pic itemSecondary" src={this.props.location.state.altUrl}></img>
                        </div>
                        <div className="itemInfo">
                            <h1 className="itemName">{this.props.location.state.name}</h1>
                            <p className="itemPrice">${this.props.location.state.price}</p>
                            <p className="size">SIZE:</p>
                            <div className="buttonWrapper">
                                <select className="selector" value={this.state.size} onChange={this.handleChange}>
                                    <option value="Select">SELECT SIZE</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <button className="button2" onClick={() => this.addItem()}>Add to Cart</button>
                            </div>
                            <p className="description">Vestibulum sollicitudin lobortis neque, ac vestibulum lorem pretium fringilla. Donec lorem nisi, vulputate luctus aliquet et, ornare at dui. Ut tristique malesuada pharetra. Curabitur quis molestie turpis. Aliquam vel odio non enim cursus sodales. Nunc id consequat lacus. Fusce elit augue, ultricies vel pharetra sed, tincidunt sed enim.</p>
                        </div>
                    </div>
                </section>
                <ShopFooter />
            </div>
        )
    }
}


export default ItemPage