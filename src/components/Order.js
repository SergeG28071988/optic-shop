import React, { Component } from "react";
import { FaTrashRestore } from "react-icons/fa";

export class Order extends Component {
  render() {
    const { id, img, title, price, quantity } = this.props.product;
    return (
      <div className="product-item">
        <img src={"./img/" + img} alt={title} />
        <h4>{title}</h4>

        <div className="quantity-controls">
          <button onClick={() => this.props.decreaseQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => this.props.increaseQuantity(id)}>+</button>
        </div>

        <p>
          {price} ₽ × {quantity} = <b>{price * quantity} ₽</b>
        </p>

        <FaTrashRestore
          className="shop-cart-delete-icon"
          onClick={() => this.props.onDelete(id)}
        />
      </div>
    );
  }
}

export default Order;
