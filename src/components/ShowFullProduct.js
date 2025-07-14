import React, { Component } from "react";

export class ShowFullProduct extends Component {
  state = {
    quantity: 1,
  };

  increaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decreaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }));
  };

  handleAddToCart = () => {
    const { product, onAdd } = this.props;
    const { quantity } = this.state;

    // Добавляем товар с количеством
    onAdd({ ...product, quantity });
  };

  render() {
    const { img, title, desc, price, category } = this.props.product;
    const { quantity } = this.state;

    return (
      <div className="full-product-modal">
        <img
          src={"./img/" + img}
          alt={title}
          onClick={() => this.props.onShowProduct(this.props.product)}
        />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price} ₽</b>
        <p>{category}</p>

        {/* Контролы количества */}
        <div className="quantity-controls">
          <button onClick={this.decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={this.increaseQuantity}>+</button>
        </div>

        {/* Добавить в корзину */}
        <div className="add-to-cart" onClick={this.handleAddToCart}>
          Заказать
        </div>
      </div>
    );
  }
}

export default ShowFullProduct;
