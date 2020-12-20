import * as React from 'react'
import * as E from 'react-stripe-elements'
import { CartProps } from './main'
import { ShopHeader } from './shopHeader'
import { ShopFooter } from './shopFooter'
import { CheckoutItem } from './checkoutItem'
import { AddressForm } from './addressForm'
import '../style/checkout.css'

class Checkout extends React.Component<CartProps, any> {
    constructor(props: any) {
      super(props);

      this.state = {
        checked: false,
      }
      this.submit = this.submit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
      this.setState({
        checked: !this.state.checked
      })
    }

    async submit(ev: any) {
      // User clicked submit
    }

    render() {
      const billingAddy = this.state.checked ? null: <AddressForm />
      return (
        <E.StripeProvider apiKey="pk_test_GIo1ILZx4h5DwSW2NRfwsIYU007bXVdlPb">
          <div className="checkoutPage">
            <header className="shopHeader">
              <ShopHeader items={this.props.items}/>
            </header>
            <h1 className="checkoutTitle">CHECKOUT</h1>
            <section className="checkoutContents">
              <fieldset className="orderSummary" >
                <legend>Order Summary</legend>
                  {this.props.items.map( (contents) => <CheckoutItem item={contents} add={this.props.add} remove={this.props.remove} removeOne={this.props.removeOne}/> )}
                  <div className="totals">
                    <div>Subtotal: <br /> Shipping: <br /> Total:</div>
                    <div className="moneyz"> ${this.props.total}.00 <br /> $10.00 <br /> ${this.props.total+10}.00 <br /> </div>
                </div>
              </fieldset>
              <div className="checkoutForm">
                <form className="form">
                  <fieldset className="emailCollector">
                    <legend>Your Email</legend>
                    <div className="input-alpha">
                      <input type="text" required={true}/>
                      <label>Email</label>
                    </div>
                  </fieldset>
                  <fieldset className="shippingCollector">
                    <legend>Shipping Info</legend>
                    <AddressForm />
                  </fieldset>
                  <fieldset className="paymentCollector">
                    <legend>Payment</legend>
                    <E.Elements>
                      <div>
                        <div className="cardCollector">
                          <E.CardElement 
                          style={{
                            base: {
                              color: 'black',
                              '::placeholder': {
                                color: 'black'
                              }
                            },
                          }}
                          />                  
                        </div>
                        <div>
                          <input className="checkbox" type="checkbox" checked={ this.state.checked } onChange={ this.handleChange }/>
                          <label>Use Shipping Address</label>
                        </div>
                        <br />
                        {billingAddy}
                      </div>
                    </E.Elements>
                  </fieldset>
                  <fieldset className="review">
                    <legend>Review & Purchase</legend>
                    <button className="button3 buyMe" onClick={this.submit}>Purchase</button>
                  </fieldset>
                </form>
              </div>
            </section>
            <ShopFooter />
          </div>
        </E.StripeProvider>
      );
    }
  }

  export default Checkout;