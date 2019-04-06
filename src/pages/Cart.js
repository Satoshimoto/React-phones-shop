import React from "react";
import "../styles/Cart.scss";

class Cart extends React.Component {
  state = {
    phonesList: this.props.phones
  };

  render() {
    const phones = this.state.phonesList.map(phone => (
      <div key={phone.id} className="cart_phone">
        <img src={phone.image} alt="phone" />
        <div className="cart_price_container">
          {phone.finalPrice ? phone.finalPrice : phone.price} $
        </div>
        <div className="cart_buttons_amount_container">
          <div
            className="cart_button_amount_minus"
            style={
              phone.amount === 1
                ? { border: "1px solid gray" }
                : { border: "1px solid black" }
            }
            onClick={this.props.addAmount.bind(this, phone)}
          >
            -
          </div>
          <div className="cart_amount">{phone.amount}</div>
          <div
            className="cart_button_amount_plus"
            onClick={this.props.addAmount.bind(this, phone)}
            style={
              phone.amount === 10
                ? { border: "1px solid gray" }
                : { border: "1px solid black" }
            }
          >
            +
          </div>
        </div>
        <div className="cart_description">
          <h4>
            {phone.name} {phone.model}
          </h4>
          <p>{phone.description}</p>
        </div>
        <div
          className="cart_remove_button"
          onClick={() => this.props.removePhone(phone)}
        >
          Remove from cart
          <span className="cart_remove_button_icon">
            <i className="fas fa-window-close" />
          </span>
        </div>
      </div>
    ));

    const finalCost = this.state.phonesList.map(result => result.finalPrice);

    return (
      <div className="cart_container">
        <h1>Products in cart</h1>
        {phones}
        <div className="cart_finalPrice">
          {finalCost.length === 0 ? (
            "Your cart is empty"
          ) : (
            <>
              <h3>Final price: {finalCost.reduce((a, b) => a + b, 0)} $</h3>
              <button className="cart_pay_button">Pay </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
