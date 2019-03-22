import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ShoppingBag extends Component {
  _redirectToStore = () => {
    let storeLocation = `/${this.props.language.toLowerCase()}/store/brewers`;
    this.props.history.push(`${storeLocation}#!/~/cart`);
  };

  render() {
    return (
      <div
        className="ec-cart-widget"
        data-layout="SMALL_ICON_COUNTER"
        data-icon="CART"
        onClick={this._redirectToStore}
      />
    );
  }
}

export default withRouter(ShoppingBag);
